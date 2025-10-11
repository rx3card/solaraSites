# 🚀 Guía de Configuración - Fase 3: Formulario Funcional

Esta guía te ayudará a configurar Supabase y Resend para que el formulario de contacto funcione completamente.

---

## 📋 Requisitos Previos

- [ ] Cuenta en [Supabase](https://supabase.com) (gratis)
- [ ] Cuenta en [Resend](https://resend.com) (opcional, gratis hasta 3,000 emails/mes)

---

## 1️⃣ Configurar Supabase

### Paso 1: Crear Proyecto en Supabase

1. Ve a https://supabase.com y crea una cuenta
2. Click en **"New Project"**
3. Completa los datos:
   - **Name:** `solarasites` (o el nombre que prefieras)
   - **Database Password:** Guarda esta contraseña (la necesitarás después)
   - **Region:** Elige la más cercana a Colombia (ej: `South America (São Paulo)`)
4. Click en **"Create new project"**
5. Espera 2-3 minutos mientras se crea el proyecto

### Paso 2: Crear la Tabla de Contactos

1. En el panel de Supabase, ve a **"SQL Editor"** (icono en el menú izquierdo)
2. Click en **"New query"**
3. Copia y pega el contenido del archivo `supabase/schema.sql` en el editor
4. Click en **"Run"** (o presiona `Ctrl+Enter`)
5. Deberías ver el mensaje: ✅ **"Success. No rows returned"**

### Paso 3: Obtener las Credenciales

1. Ve a **"Settings"** → **"API"**
2. Copia las siguientes credenciales:
   - **Project URL:** Algo como `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key:** Una key larga que empieza con `eyJ...`
   - **service_role key:** Otra key larga (⚠️ **nunca compartas esta**)

### Paso 4: Configurar Variables de Entorno

1. Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# En la raíz del proyecto
cd c:\Users\rojas\Desktop\repos\bussines.sites\solarasites
New-Item -Path ".env.local" -ItemType File
```

2. Agrega las siguientes variables (reemplaza con tus valores):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...

# Email de destino para notificaciones
CONTACT_EMAIL=solarasites.com@gmail.com
```

3. **Importante:** El archivo `.env.local` ya está en `.gitignore`, así que no se subirá a GitHub

---

## 2️⃣ Configurar Resend (Opcional - Para Emails)

### Paso 1: Crear Cuenta en Resend

1. Ve a https://resend.com
2. Crea una cuenta (gratis)
3. Verifica tu email

### Paso 2: Obtener API Key

1. En el dashboard de Resend, ve a **"API Keys"**
2. Click en **"Create API Key"**
3. Dale un nombre: `SolaraSites Production`
4. Copia la API Key (solo se muestra una vez)

### Paso 3: Agregar a Variables de Entorno

Agrega esta línea a tu archivo `.env.local`:

```env
# Resend API (Para envío de emails)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxx
```

### Paso 4: Verificar Dominio (Opcional - Producción)

Para usar tu propio dominio en los emails:

1. Ve a **"Domains"** en Resend
2. Click en **"Add Domain"**
3. Agrega tu dominio (ej: `solarasites.com`)
4. Sigue las instrucciones para agregar los registros DNS
5. Una vez verificado, actualiza el `from` en `/app/api/contact/route.ts`:

```typescript
from: 'SolaraSites <contacto@solarasites.com>',
```

---

## 3️⃣ Probar el Formulario

### Paso 1: Reiniciar el Servidor de Desarrollo

```bash
# Detén el servidor si está corriendo (Ctrl+C)
# Luego inícialo de nuevo
pnpm dev
```

### Paso 2: Probar el Formulario

1. Ve a http://localhost:3000
2. Desplázate a la sección de **"Contacto"**
3. Llena el formulario con datos de prueba
4. Click en **"Enviar Solicitud"**
5. Deberías ver el mensaje: ✅ **"¡Mensaje enviado con éxito!"**

### Paso 3: Verificar en Supabase

1. Ve a tu proyecto en Supabase
2. Click en **"Table Editor"**
3. Selecciona la tabla `contact_messages`
4. Deberías ver tu mensaje de prueba

### Paso 4: Revisar el Panel de Administración

1. Ve a http://localhost:3000/admin/messages
2. Deberías ver todos los mensajes recibidos
3. Prueba marcar un mensaje como **"Leído"** o **"Respondido"**

---

## 4️⃣ Solución de Problemas

### Error: "Cannot find module '@supabase/supabase-js'"

Reinstala las dependencias:

```bash
pnpm install
```

### Error: "Invalid API key" o "401 Unauthorized"

Verifica que:
- Las URLs y keys en `.env.local` sean correctas
- No haya espacios extra al copiar/pegar
- El archivo `.env.local` esté en la raíz del proyecto
- Hayas reiniciado el servidor después de crear `.env.local`

### Error: "relation 'contact_messages' does not exist"

La tabla no se creó correctamente. Vuelve a ejecutar el SQL en Supabase:
1. SQL Editor → New query
2. Pega el contenido de `supabase/schema.sql`
3. Run

### Los emails no llegan

- Verifica que `RESEND_API_KEY` esté configurado en `.env.local`
- Revisa los logs en la consola del navegador (F12)
- Si usas el dominio `onboarding@resend.dev`, los emails solo llegan a la cuenta de Resend
- Para emails reales, necesitas verificar tu dominio

---

## 5️⃣ Despliegue a Producción

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a https://vercel.com e importa tu repositorio
3. En **"Environment Variables"**, agrega todas las variables de `.env.local`
4. Deploy

### Variables de Entorno en Vercel

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_...
CONTACT_EMAIL=solarasites.com@gmail.com
```

---

## 6️⃣ Seguridad en Producción

### ✅ Buenas Prácticas

1. **Nunca compartas** tu `SUPABASE_SERVICE_ROLE_KEY`
2. **No subas** el archivo `.env.local` a GitHub
3. **Usa diferentes proyectos** de Supabase para desarrollo y producción
4. **Habilita Rate Limiting** en Supabase para evitar spam
5. **Agrega CAPTCHA** (ej: hCaptcha, Turnstile) si recibes mucho spam

### Configurar Rate Limiting en Supabase

1. Ve a **"Database"** → **"Functions"**
2. Considera agregar una función que limite requests por IP
3. O usa un servicio como [Vercel Rate Limiting](https://vercel.com/docs/security/rate-limiting)

---

## ✅ Checklist Final

- [ ] Supabase configurado y tabla creada
- [ ] Variables de entorno en `.env.local`
- [ ] Formulario probado localmente
- [ ] Mensajes visibles en Supabase
- [ ] Panel de admin funcionando
- [ ] (Opcional) Resend configurado para emails
- [ ] Proyecto desplegado a producción
- [ ] Variables de entorno configuradas en Vercel

---

## 🎉 ¡Listo!

Tu formulario de contacto ahora está completamente funcional con:
- ✅ Validación en tiempo real
- ✅ Guardado en base de datos
- ✅ Panel de administración
- ✅ Notificaciones por email (opcional)
- ✅ Manejo de errores robusto

**Siguiente paso:** Fase 4 - Testing y Deploy 🚀
