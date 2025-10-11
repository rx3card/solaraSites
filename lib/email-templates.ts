interface ContactData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

// Email que recibe el ADMIN cuando alguien llena el formulario
export const getAdminNotificationEmail = (data: ContactData) => {
  return {
    subject: `Nuevo contacto · ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
            .content { padding: 32px 24px !important; }
            h1 { font-size: 28px !important; }
            .divider { margin: 24px 0 !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif; background-color: #000000;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 0;">
          <tr>
            <td align="center">
              <!-- Main Container -->
              <table class="container" width="100%" style="max-width: 600px; background-color: #000000;" cellpadding="0" cellspacing="0">
                
                <!-- Content -->
                <tr>
                  <td class="content" style="padding: 48px 40px;">
                    
                    <!-- Title -->
                    <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 34px; font-weight: 600; letter-spacing: -0.5px; line-height: 1.1;">
                      ${data.name}
                    </h1>
                    <p style="margin: 0 0 40px 0; color: #86868b; font-size: 17px; font-weight: 400;">
                      ${data.projectType}
                    </p>
                    
                    <!-- Divider -->
                    <div class="divider" style="height: 1px; background-color: #1d1d1f; margin: 32px 0;"></div>
                    
                    <!-- Contact Info -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                      <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #1d1d1f;">
                          <div style="color: #86868b; font-size: 13px; font-weight: 400; margin-bottom: 6px;">Email</div>
                          <a href="mailto:${data.email}" style="color: #2997ff; font-size: 17px; font-weight: 400; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #1d1d1f;">
                          <div style="color: #86868b; font-size: 13px; font-weight: 400; margin-bottom: 6px;">Teléfono</div>
                          <a href="tel:${data.phone}" style="color: #2997ff; font-size: 17px; font-weight: 400; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0;">
                          <div style="color: #86868b; font-size: 13px; font-weight: 400; margin-bottom: 8px;">Mensaje</div>
                          <div style="color: #f5f5f7; font-size: 17px; font-weight: 400; line-height: 1.5;">
                            ${data.message.replace(/\n/g, '<br>')}
                          </div>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <a href="https://wa.me/${data.phone.replace(/[^\d+]/g, '')}" 
                             style="display: inline-block; background-color: #0071e3; color: #ffffff; padding: 12px 24px; border-radius: 980px; text-decoration: none; font-size: 17px; font-weight: 400;">
                            Responder
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 32px 40px; border-top: 1px solid #1d1d1f;">
                    <div style="color: #86868b; font-size: 13px; font-weight: 400; text-align: center;">
                      SolaraSites
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };
};

// Email de CONFIRMACIÓN que recibe el CLIENTE
export const getClientConfirmationEmail = (data: ContactData, supportEmail: string) => {
  return {
    subject: 'Tu solicitud ha sido recibida',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
            .content { padding: 32px 24px !important; }
            h1 { font-size: 28px !important; }
            .feature { margin-bottom: 20px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif; background-color: #000000;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 0;">
          <tr>
            <td align="center">
              <!-- Main Container -->
              <table class="container" width="100%" style="max-width: 600px; background-color: #000000;" cellpadding="0" cellspacing="0">
                
                <!-- Content -->
                <tr>
                  <td class="content" style="padding: 48px 40px;">
                    
                    <!-- Title -->
                    <h1 style="margin: 0 0 16px 0; color: #ffffff; font-size: 34px; font-weight: 600; letter-spacing: -0.5px; line-height: 1.1;">
                      Hola, ${data.name}.
                    </h1>
                    <p style="margin: 0 0 40px 0; color: #f5f5f7; font-size: 21px; font-weight: 400; line-height: 1.4;">
                      Hemos recibido tu solicitud de ${data.projectType} y nuestro equipo comenzará a trabajar en ella.
                    </p>
                    
                    <!-- Divider -->
                    <div style="height: 1px; background-color: #1d1d1f; margin: 32px 0;"></div>
                    
                    <!-- Features -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                      <tr>
                        <td class="feature" style="padding: 16px 0; border-bottom: 1px solid #1d1d1f;">
                          <div style="color: #ffffff; font-size: 17px; font-weight: 600; margin-bottom: 4px;">Respuesta en 24 horas</div>
                          <div style="color: #86868b; font-size: 15px; font-weight: 400; line-height: 1.4;">
                            Te contactaremos para discutir los detalles de tu proyecto
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="feature" style="padding: 16px 0; border-bottom: 1px solid #1d1d1f;">
                          <div style="color: #ffffff; font-size: 17px; font-weight: 600; margin-bottom: 4px;">Propuesta personalizada</div>
                          <div style="color: #86868b; font-size: 15px; font-weight: 400; line-height: 1.4;">
                            Recibirás un plan adaptado a tus necesidades específicas
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="feature" style="padding: 16px 0;">
                          <div style="color: #ffffff; font-size: 17px; font-weight: 600; margin-bottom: 4px;">Soporte dedicado</div>
                          <div style="color: #86868b; font-size: 15px; font-weight: 400; line-height: 1.4;">
                            Un equipo especializado estará disponible para ti
                          </div>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Contact -->
                    <div style="margin-bottom: 32px;">
                      <p style="margin: 0 0 16px 0; color: #86868b; font-size: 15px; font-weight: 400;">
                        ¿Necesitas ayuda inmediata?
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <a href="https://wa.me/+573184961233" 
                               style="display: inline-block; background-color: #0071e3; color: #ffffff; padding: 12px 24px; border-radius: 980px; text-decoration: none; font-size: 17px; font-weight: 400; margin-right: 12px;">
                              Chatea
                            </a>
                          </td>
                        </tr>
                      </table>
                      <p style="margin: 16px 0 0 0; text-align: center;">
                        <a href="mailto:${supportEmail}" style="color: #2997ff; font-size: 15px; font-weight: 400; text-decoration: none;">${supportEmail}</a>
                      </p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 32px 40px; border-top: 1px solid #1d1d1f;">
                    <div style="color: #86868b; font-size: 13px; font-weight: 400; text-align: center;">
                      SolaraSites
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };
};
