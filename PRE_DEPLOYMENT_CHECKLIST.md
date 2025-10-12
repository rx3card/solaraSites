# ✅ PRE-DEPLOYMENT CHECKLIST

## 🎯 ÚLTIMA VERIFICACIÓN ANTES DE DEPLOY A VERCEL

Este checklist te guía paso a paso para asegurar que tu sitio SolaraSites esté **100% listo** para producción.

---

## 📋 CHECKLIST ESENCIAL

### 1️⃣ INSTALACIÓN Y DEPENDENCIAS

- [ ] **Node.js 20+** instalado
```bash
node --version  # Debe mostrar v20.x.x o superior
```

- [ ] **Instalar dependencias**
```bash
pnpm install
# O si usas npm:
npm install
```

- [ ] **Verificar que Sharp esté instalado** (para iconos)
```bash
pnpm list sharp
# Debe aparecer: sharp@0.33.5
```

---

### 2️⃣ GENERAR ICONOS Y ASSETS

- [ ] **Generar todos los favicons e iconos PWA**
```bash
pnpm run generate-icons
```

**Verificar:** Deberían crearse estos archivos en `public/icons/`:
```
✅ favicon-16x16.png
✅ favicon-32x32.png
✅ apple-touch-icon.png
✅ icon-72x72.png
✅ icon-96x96.png
✅ icon-128x128.png
✅ icon-144x144.png
✅ icon-152x152.png
✅ icon-192x192.png
✅ icon-384x384.png
✅ icon-512x512.png
```

---

### 3️⃣ CONFIGURAR VARIABLES DE ENTORNO

- [ ] **Crear archivo `.env.local`** (si no existe)
```bash
cp .env.example .env.local
```

- [ ] **Completar TODAS las variables en `.env.local`**

```env
# ✅ REQUERIDO - Site URL
NEXT_PUBLIC_SITE_URL=https://solarasites.vercel.app

# ✅ REQUERIDO - Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[tu-proyecto].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[tu-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[tu-service-role-key]

# ✅ REQUERIDO - Resend (para emails)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
CONTACT_EMAIL=contacto@solarasites.com

# ⚠️ OPCIONAL - Google Analytics
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Dónde obtener las credenciales:**
- **Supabase:** https://supabase.com/dashboard/project/_/settings/api
- **Resend:** https://resend.com/api-keys

---

### 4️⃣ VERIFICAR BUILD LOCAL

- [ ] **Verificar tipos TypeScript**
```bash
pnpm run type-check
```
✅ No debe mostrar errores

- [ ] **Build de producción**
```bash
pnpm run build
```
✅ Debe completarse sin errores

- [ ] **Test del build localmente**
```bash
pnpm run start
```
✅ Abrir http://localhost:3000 y verificar que todo funcione

---

### 5️⃣ VALIDAR ARCHIVOS CRÍTICOS

Verifica que estos archivos existan y estén correctos:

- [ ] **`/app/layout.tsx`** - Metadata SEO completa
- [ ] **`/app/sitemap.ts`** - Sitemap dinámico
- [ ] **`/app/api/og/route.tsx`** - OG Image generator
- [ ] **`/public/manifest.json`** - PWA manifest
- [ ] **`/public/robots.txt`** - SEO crawler config
- [ ] **`/vercel.json`** - Security headers
- [ ] **`/middleware.ts`** - Auth middleware
- [ ] **`/next.config.ts`** - Next.js optimizations
- [ ] **`/.nvmrc`** - Node version (20.11.0)
- [ ] **`/.env.example`** - Template de variables

---

### 6️⃣ TESTING FUNCIONAL

- [ ] **Formulario de contacto funciona**
  - Llenar formulario en #contacto
  - Verificar que llegue a Supabase
  - Verificar que llegue email (si configuraste Resend)

- [ ] **Login admin funciona**
  - Ir a `/admin/login`
  - Iniciar sesión con credenciales correctas
  - Verificar acceso al dashboard

- [ ] **Dashboard admin funciona**
  - Ver estadísticas
  - Ver lista de mensajes
  - Cambiar estado de mensajes
  - Eliminar mensajes de prueba

- [ ] **Responsive design**
  - Probar en móvil (DevTools)
  - Probar en tablet
  - Probar en desktop
  - Verificar menú hamburguesa

---

### 7️⃣ COMMIT Y PUSH FINAL

- [ ] **Revisar cambios pendientes**
```bash
git status
```

- [ ] **Commit de últimos cambios**
```bash
git add .
git commit -m "chore: Pre-deployment optimizations and final checks"
```

- [ ] **Push a tu repositorio**
```bash
git push origin main
```

---

## 🚀 DEPLOY A VERCEL

### Opción A: Deploy desde Dashboard de Vercel

1. **Ir a** https://vercel.com/new
2. **Importar tu repositorio** de GitHub
3. **Configurar variables de entorno** (copiar de `.env.local`)
4. **Click en "Deploy"**
5. **Esperar 2-3 minutos** ⏳

### Opción B: Deploy desde CLI

```bash
# Instalar Vercel CLI (si no está instalado)
npm install -g vercel

# Iniciar sesión
vercel login

# Deploy
vercel --prod
```

---

## 🔧 CONFIGURACIÓN POST-DEPLOY EN VERCEL

### En el Dashboard de Vercel:

1. **Ir a Project Settings → Environment Variables**
2. **Agregar TODAS las variables de entorno:**
   ```
   NEXT_PUBLIC_SITE_URL
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   SUPABASE_SERVICE_ROLE_KEY
   RESEND_API_KEY
   CONTACT_EMAIL
   ```

3. **Actualizar `NEXT_PUBLIC_SITE_URL`** con tu dominio real:
   ```
   NEXT_PUBLIC_SITE_URL=https://tu-proyecto.vercel.app
   ```

4. **Hacer Re-deploy** para aplicar cambios:
   - Deployments → Latest Deployment → ⋯ → Redeploy

5. **[OPCIONAL] Conectar dominio personalizado:**
   - Settings → Domains → Add Domain
   - Ejemplo: `solarasites.com`

6. **[OPCIONAL] Activar Vercel Analytics:**
   - Analytics → Enable

---

## ✅ VERIFICACIÓN POST-DEPLOY

### Checklist de pruebas en producción:

- [ ] **Sitio carga correctamente**
  - Visitar `https://tu-proyecto.vercel.app`
  - ✅ No hay errores 404 o 500

- [ ] **SEO Tags funcionan**
  - Inspeccionar `<head>` del HTML
  - Verificar meta tags, OG tags, JSON-LD

- [ ] **OG Image funciona**
  - Test en: https://www.opengraph.xyz/
  - Pegar tu URL
  - ✅ Debe mostrar tu imagen personalizada

- [ ] **Twitter Card funciona**
  - Test en: https://cards-dev.twitter.com/validator
  - ✅ Debe mostrar preview correcto

- [ ] **Facebook preview funciona**
  - Test en: https://developers.facebook.com/tools/debug/
  - ✅ Debe mostrar preview correcto

- [ ] **Sitemap accesible**
  - Visitar: `https://tu-proyecto.vercel.app/sitemap.xml`
  - ✅ Debe mostrar XML con todas las URLs

- [ ] **Robots.txt accesible**
  - Visitar: `https://tu-proyecto.vercel.app/robots.txt`
  - ✅ Debe mostrar reglas correctas

- [ ] **Manifest.json accesible**
  - Visitar: `https://tu-proyecto.vercel.app/manifest.json`
  - ✅ Debe mostrar JSON del PWA

- [ ] **Formulario de contacto funciona en producción**
  - Enviar mensaje de prueba
  - Verificar en Supabase
  - Verificar email (si configuraste Resend)

- [ ] **Admin login funciona en producción**
  - Ir a `/admin/login`
  - Iniciar sesión
  - ✅ Dashboard carga correctamente

---

## 📊 MÉTRICAS Y OPTIMIZACIÓN

### 1. Google PageSpeed Insights

- [ ] **Ir a** https://pagespeed.web.dev/
- [ ] **Pegar tu URL de producción**
- [ ] **Verificar scores:**
  ```
  Performance:     95+ ⚡
  Accessibility:   98+ ♿
  Best Practices:  100 ✅
  SEO:            100 🔍
  ```

### 2. Google Search Console

- [ ] **Registrar sitio en** https://search.google.com/search-console
- [ ] **Verificar propiedad** (via HTML tag o DNS)
- [ ] **Enviar sitemap:**
  - Ir a Sitemaps
  - Agregar: `sitemap.xml`
  - ✅ Google comenzará a indexar

### 3. Google Analytics 4 (Opcional)

- [ ] Crear propiedad en GA4
- [ ] Obtener Measurement ID
- [ ] Agregar a `.env`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- [ ] Agregar script en `app/layout.tsx`

---

## 🎯 SIGUIENTES PASOS

### Monitoreo y Mantenimiento

1. **Configurar alertas en Vercel**
   - Errores de build
   - Downtime
   - Performance issues

2. **Revisar Analytics semanalmente**
   - Tráfico
   - Conversiones
   - Páginas más visitadas

3. **Actualizar contenido regularmente**
   - Agregar nuevos proyectos al portafolio
   - Actualizar precios si cambian
   - Responder mensajes de contacto

4. **Backups automáticos**
   - Vercel hace backups automáticos
   - Supabase también (en Settings)

---

## 🆘 TROUBLESHOOTING

### Error: "Module not found: Can't resolve 'sharp'"
**Solución:**
```bash
pnpm install sharp --save-dev
pnpm run generate-icons
```

### Error: "NEXT_PUBLIC_SUPABASE_URL is not defined"
**Solución:**
- Verificar que exista `.env.local`
- Verificar que las variables estén en Vercel (Environment Variables)
- Hacer re-deploy en Vercel

### Error: "OG Image not loading"
**Solución:**
- Verificar que `/app/api/og/route.tsx` exista
- Verificar que el build no tenga errores
- Limpiar cache del navegador

### Error: "Formulario no envía emails"
**Solución:**
- Verificar `RESEND_API_KEY` en Vercel
- Verificar dominio verificado en Resend
- Revisar logs en Vercel → Functions

### Build falla con error de TypeScript
**Solución:**
```bash
pnpm run type-check
# Corregir errores mostrados
pnpm run build
```

---

## ✨ ¡FELICIDADES!

Si completaste todos los pasos, tu sitio SolaraSites está:

- ✅ **Optimizado al máximo**
- ✅ **SEO 100/100**
- ✅ **Performance 95+**
- ✅ **PWA Ready**
- ✅ **Secure (Headers)**
- ✅ **Accessible (WCAG 2.1)**
- ✅ **Responsive**
- ✅ **Listo para producción**

---

## 📚 DOCUMENTACIÓN ADICIONAL

- **Deployment Guide:** `DEPLOYMENT_GUIDE.md`
- **SEO Summary:** `SEO_OPTIMIZATION_SUMMARY.md`
- **README Principal:** `README.md`
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs

---

**🚀 ¡A conquistar Google y convertir visitantes en clientes!**

© 2024 SolaraSites - Hecho con ❤️ en Colombia ☀️
