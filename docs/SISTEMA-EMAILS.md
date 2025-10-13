# 📧 Sistema de Emails Automáticos

## ✅ ¿Qué hace el sistema?

Cuando un cliente llena el formulario de contacto, **se envían 2 emails automáticamente:**

### 1️⃣ Email al ADMIN (Notificación)
- **Para:** Tu email (`CONTACT_EMAIL`)
- **Asunto:** 🔔 Nuevo Contacto: [Nombre] - [Tipo Proyecto]
- **Contenido:**
  - Todos los datos del formulario
  - Botón para responder por WhatsApp
  - Diseño profesional con gradientes naranja

### 2️⃣ Email al CLIENTE (Confirmación Automática)
- **Para:** Email del cliente
- **Asunto:** ✅ Hemos recibido tu solicitud - SolaraSites
- **Contenido:**
  - Saludo personalizado con su nombre
  - Confirmación de que recibiste su mensaje
  - Qué va a pasar después (respuesta en 24h)
  - Email de soporte para dudas
  - Botón de WhatsApp para contacto rápido
  - Diseño premium con marca SolaraSites

---

## 🎨 Vista Previa de los Emails

### Email para el Admin:
```
┌─────────────────────────────────────┐
│  🔔 Nuevo Mensaje de Contacto       │
│  SolaraSites - Panel Admin          │
├─────────────────────────────────────┤
│                                     │
│  Información del Cliente            │
│                                     │
│  👤 Nombre: Juan Pérez              │
│  📧 Email: juan@example.com         │
│  📱 Teléfono: +57 300 123 4567      │
│  💼 Proyecto: Landing Page          │
│  💬 Mensaje: Necesito una web...    │
│                                     │
│  [💬 Responder por WhatsApp]        │
└─────────────────────────────────────┘
```

### Email para el Cliente:
```
┌─────────────────────────────────────┐
│           ✅                         │
│     ¡Mensaje Recibido!              │
│  Gracias por contactar SolaraSites  │
├─────────────────────────────────────┤
│                                     │
│  Hola Juan, 👋                      │
│                                     │
│  Hemos recibido tu solicitud para   │
│  un proyecto de tipo Landing Page   │
│                                     │
│  📋 ¿Qué sigue?                     │
│  • Revisaremos tu solicitud         │
│  • Te contactaremos en <24h         │
│  • Prepararemos una cotización      │
│                                     │
│  📧 Email: contacto@solarasites.com │
│  💬 WhatsApp: +57 318 496 1233      │
│                                     │
│  [💬 Chatea con Nosotros]           │
│                                     │
│  Gracias por confiar en SolaraSites │
│  Tu socio en desarrollo web 🚀      │
└─────────────────────────────────────┘
```

---

## 🧪 Cómo Probar

### 1. Verifica que tengas Resend configurado

En tu `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=tu-email@gmail.com
```

### 2. Reinicia el servidor
```bash
Ctrl+C
pnpm dev
```

### 3. Envía un mensaje de prueba
1. Ve a http://localhost:3000
2. Llena el formulario con **TU propio email** en el campo email
3. Envía el formulario

### 4. Revisa tus correos
Deberías recibir **2 emails:**
- ✅ Uno en `CONTACT_EMAIL` (notificación como admin)
- ✅ Otro en el email que pusiste en el formulario (confirmación como cliente)

---

## 🎨 Características del Diseño

### Email al Admin:
- ✅ Gradiente naranja/dorado (colores de marca)
- ✅ Información organizada en tabla
- ✅ Botón CTA para WhatsApp
- ✅ Diseño limpio y profesional
- ✅ Responsive (se ve bien en móvil)

### Email al Cliente:
- ✅ Marca visual fuerte (ícono de check)
- ✅ Mensaje cálido y personalizado
- ✅ Información clara de qué esperar
- ✅ Múltiples formas de contacto
- ✅ Footer profesional con año automático
- ✅ Responsive y accesible

---

## 🔧 Personalización

### Cambiar el remitente (cuando tengas dominio):

Edita `/app/api/contact/route.ts`:

```typescript
from: 'SolaraSites <contacto@solarasites.com>'
```

### Editar los templates:

Los templates están en `/lib/email-templates.ts`:

- `getAdminNotificationEmail()` - Email para ti
- `getClientConfirmationEmail()` - Email para el cliente

**Puedes cambiar:**
- Colores
- Textos
- Estructura
- Agregar más información

---

## 📊 Logs en Consola

En la terminal de desarrollo verás:

### Si todo funciona:
```
✅ Emails enviados correctamente (admin + cliente)
POST /api/contact 201 in 2134ms
```

### Si hay error:
```
❌ Error al enviar emails: [descripción del error]
POST /api/contact 201 in 1523ms
```

**Nota:** Aunque falle el email, el mensaje **sigue guardándose en Supabase**.

---

## 🌐 En Producción

### Vercel Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=soporte@solarasites.com
```

### Con dominio verificado:

1. Resend → Domains → Add Domain
2. Verificar con registros DNS
3. Cambiar `from:` en el código
4. Los emails ya no van a spam ✅

---

## 🆘 Troubleshooting

### "Los emails no llegan"
- Verifica que `RESEND_API_KEY` esté en `.env.local`
- Revisa la carpeta de spam
- Mira los logs en la terminal

### "Solo llega el email del admin, no el del cliente"
- Verifica que el email en el formulario sea válido
- Revisa los logs de error en la consola

### "Email llega sin estilos"
- Normal en algunos clientes de email
- Los estilos inline funcionan en Gmail, Outlook, etc.

### "Quiero cambiar el diseño"
- Edita `/lib/email-templates.ts`
- Usa HTML + CSS inline
- Prueba en diferentes clientes de email

---

## 📈 Límites de Resend (Plan Gratuito)

- ✅ **3,000 emails/mes** gratis
- ✅ 100 emails/día
- ✅ Suficiente para empezar

Si recibes muchos formularios, considera el plan de pago ($20/mes para 50k emails).

---

## ✅ Checklist de Funcionamiento

- [ ] `RESEND_API_KEY` configurado en `.env.local`
- [ ] `CONTACT_EMAIL` configurado
- [ ] Servidor reiniciado después de agregar variables
- [ ] Formulario enviado con tu email de prueba
- [ ] Email de admin recibido ✅
- [ ] Email de confirmación al cliente recibido ✅
- [ ] Ambos emails tienen buen diseño
- [ ] Los enlaces de WhatsApp funcionan

---

**¡Sistema de emails profesional listo!** 📧✨
