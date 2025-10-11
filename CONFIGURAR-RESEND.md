# 📧 Configurar Resend (Sin Dominio Propio)

## ✅ SÍ se puede enviar emails sin dominio

ChatGPT tiene razón. Resend permite enviar desde `onboarding@resend.dev` inmediatamente.

---

## 🚀 Pasos para Configurar

### 1. Crear Cuenta en Resend

1. Ve a: https://resend.com
2. Crea una cuenta gratis
3. Verifica tu email

### 2. Obtener API Key

1. En el dashboard de Resend: https://resend.com/api-keys
2. Clic en **"Create API Key"**
3. Nombre: `SolaraSites`
4. Permisos: **Sending access**
5. Clic en **"Add"**
6. **Copia la API Key** (empieza con `re_`)

### 3. Agregar Variables de Entorno

Abre tu archivo `.env.local` y agrega:

```bash
# Resend API
RESEND_API_KEY=re_tu_api_key_aqui

# Email donde RECIBIRÁS los mensajes del formulario
CONTACT_EMAIL=solarasites.com@gmail.com
```

### 4. Reiniciar el Servidor

```bash
Ctrl+C
pnpm dev
```

---

## 📨 Cómo Funciona

### ⚠️ MODO SANDBOX (Por Defecto)

Resend pone las cuentas nuevas en **modo sandbox** por seguridad. Esto significa:
- ✅ Puedes enviar emails
- 🚫 Solo a TU email verificado (`solarasites.com@gmail.com`)
- 🚫 NO puedes enviar a clientes hasta verificar un dominio

**Solución actual:** Ambos emails llegan a tu bandeja:

### Email 1 - Notificación (Admin)
- **De:** `SolaraSites <onboarding@resend.dev>`
- **Para:** `solarasites.com@gmail.com`
- **Subject:** `Nuevo contacto · Juan Pérez`
- **Contenido:** Datos del lead

### Email 2 - Confirmación (Cliente)
- **De:** `SolaraSites <onboarding@resend.dev>`
- **Para:** `solarasites.com@gmail.com` (temporal)
- **Subject:** `[📧 Para: cliente@email.com] Tu solicitud ha sido recibida`
- **Contenido:** Confirmación con diseño Apple
- **Reply-To:** Email del cliente (puedes responder directo)

---

## 🎯 Probar (Modo Sandbox)

1. Llena el formulario de contacto en tu web
2. Recibirás **2 emails en `solarasites.com@gmail.com`:**
   - ✅ **Email 1:** Notificación del nuevo lead (estilo Apple)
   - ✅ **Email 2:** `[📧 Para: cliente@email.com] Tu solicitud...` (confirmación)
3. El subject del Email 2 muestra a quién estaba destinado
4. Puedes copiar ese email y reenviar manualmente al cliente (por ahora)

---

## 🚀 SALIR DEL MODO SANDBOX (Recomendado)

Para enviar emails **directo a tus clientes**, necesitas verificar un dominio:

### Paso 1: Comprar un Dominio
- Ve a: [Namecheap](https://www.namecheap.com) o [GoDaddy](https://www.godaddy.com)
- Compra un dominio (ej: `solarasites.com`)
- Costo: ~$10-15 USD/año

### Paso 2: Verificar Dominio en Resend
1. Ve a: https://resend.com/domains
2. Clic en **"Add Domain"**
3. Ingresa tu dominio: `solarasites.com`
4. Copia los registros DNS (TXT, MX, CNAME)

### Paso 3: Configurar DNS
1. Ve al panel de tu proveedor de dominio
2. Agrega los registros DNS que te dio Resend
3. Espera 5-30 minutos a que se propaguen
4. Resend verificará automáticamente

### Paso 4: Actualizar el Código
En `app/api/contact/route.ts` línea 73:
```typescript
const isSandboxMode = false; // ✅ Cambiar a false
```

Y en línea 55 y 80:
```typescript
from: 'SolaraSites <no-reply@solarasites.com>', // ✅ Usar tu dominio
```

### ✅ Resultado
- ✅ Emails se envían **directo al cliente**
- ✅ Más profesional (`@solarasites.com` en lugar de `@resend.dev`)
- ✅ Menor probabilidad de spam
- ✅ Mejor reputación de envío

---

## 📊 Límites Gratis

- **3,000 emails/mes** gratis
- Perfecto para un formulario de contacto

---

## 🛠️ Si Tienes Problemas

Verifica en la consola:
```bash
pnpm dev
```

Deberías ver:
```
📤 Enviando email al admin: solarasites.com@gmail.com
✅ Email admin enviado: { data: { id: '...' } }
📤 Enviando email de confirmación al cliente: cliente@example.com
✅ Email de confirmación enviado al cliente: cliente@example.com
   Response ID: abc123...
```

Si ves errores, revisa:
1. ✅ API Key correcta en `.env.local`
2. ✅ Variables `RESEND_API_KEY` y `CONTACT_EMAIL` configuradas
3. ✅ Servidor reiniciado después de agregar las variables
4. ✅ Email válido en el formulario

### Errores Comunes

**Error: "Invalid API key"**
- Verifica que copiaste la API key completa de Resend
- Debe empezar con `re_`

**Error: "Rate limit exceeded"**
- Has superado los 3,000 emails/mes del plan gratuito
- Espera hasta el siguiente mes o upgradea tu plan

**El email llega a spam**
- Normal con `@resend.dev`, configura un dominio propio para mejor entregabilidad

---

**¿Listo? Configura tu API Key y el cliente recibirá su confirmación automáticamente.** 🚀✨
