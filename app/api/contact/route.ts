import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { contactFormSchema } from '@/lib/validations/contact';
import { Resend } from 'resend';
import { getAdminNotificationEmail, getClientConfirmationEmail } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar datos con Zod
    const validatedData = contactFormSchema.parse(body);
    
    // Guardar en Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          project_type: validatedData.projectType,
          message: validatedData.message,
          status: 'new',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('❌ Error Supabase:', error.message);
      return NextResponse.json(
        { error: 'Error al guardar el mensaje. Por favor intenta de nuevo.' },
        { status: 500 }
      );
    }

    console.log('✅ Mensaje guardado en DB');

    // Enviar emails (opcional, solo si tienes Resend configurado)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const emailData = {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        projectType: validatedData.projectType,
        message: validatedData.message,
      };

      // 1. Email al ADMIN (notificación)
      try {
        const adminEmail = getAdminNotificationEmail(emailData);
        const adminResponse = await resend.emails.send({
          from: 'SolaraSites <onboarding@resend.dev>',
          to: [process.env.CONTACT_EMAIL],
          subject: adminEmail.subject,
          html: adminEmail.html,
        });
        if (adminResponse.data) {
          console.log('✅ Email admin enviado');
        }
      } catch (adminEmailError: any) {
        console.error('❌ Error email admin:', adminEmailError.message);
      }

      // 2. Email al CLIENTE (confirmación automática)
      try {
        const clientEmail = getClientConfirmationEmail(emailData, process.env.CONTACT_EMAIL);
        
        // TEMPORAL: Resend en modo sandbox solo permite enviar a tu email verificado
        // Para enviar directo al cliente: verifica un dominio en resend.com/domains
        const isSandboxMode = true; // Cambia a false cuando verifiques dominio
        const recipientEmail = isSandboxMode ? process.env.CONTACT_EMAIL : validatedData.email;
        const emailSubject = isSandboxMode 
          ? `[📧 Para: ${validatedData.email}] ${clientEmail.subject}`
          : clientEmail.subject;
        
        const clientResponse = await resend.emails.send({
          from: 'SolaraSites <onboarding@resend.dev>',
          to: [recipientEmail],
          subject: emailSubject,
          html: clientEmail.html,
          replyTo: validatedData.email, // Puedes responder directo al cliente
        });
        
        if (clientResponse.data) {
          console.log('✅ Email cliente enviado' + (isSandboxMode ? ' (sandbox)' : ''));
        } else if (clientResponse.error) {
          console.error('❌ Error email cliente:', clientResponse.error.message);
        }
      } catch (clientEmailError: any) {
        console.error('❌ Error email cliente:', clientEmailError.message || clientEmailError);
      }
    } else {
      console.log('⚠️ Resend no configurado. Variables faltantes:', {
        hasApiKey: !!process.env.RESEND_API_KEY,
        hasContactEmail: !!process.env.CONTACT_EMAIL,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: '¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.',
        data,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Errores de validación de Zod
    if (error.name === 'ZodError') {
      console.error('❌ Validación fallida');
      return NextResponse.json(
        {
          error: 'Datos inválidos',
          details: error.errors.map((e: any) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error('❌ Error inesperado:', error.message);
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor intenta de nuevo más tarde.' },
      { status: 500 }
    );
  }
}
