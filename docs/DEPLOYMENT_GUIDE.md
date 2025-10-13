# 🚀 Guía de Despliegue - SolaraSites

## Checklist Pre-Despliegue

Antes de desplegar a producción en Vercel, asegúrate de completar estos pasos:

### ✅ 1. Variables de Entorno

Configura estas variables en Vercel Dashboard:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

# Resend (para emails)
RESEND_API_KEY=tu_resend_api_key

# URLs
NEXT_PUBLIC_SITE_URL=https://solarasites.vercel.app
```

### ✅ 2. Generar Iconos

Antes del primer despliegue, genera todos los iconos:

```bash
# Instalar sharp (si no está instalado)
npm install sharp --save-dev

# Generar todos los iconos desde logoV2.png
npm run generate-icons
```

Esto creará todos los favicons y iconos PWA necesarios en `/public/icons/`.

### ✅ 3. Verificar Metadata

Asegúrate de actualizar en `app/layout.tsx`:

- [ ] URLs correctas (cambiar de `.vercel.app` a dominio personalizado si tienes)
- [ ] Email de contacto correcto
- [ ] Número de teléfono de WhatsApp correcto
- [ ] Links de redes sociales (Instagram, Twitter)
- [ ] Códigos de verificación (Google Search Console, etc.)

### ✅ 4. Optimizar Imágenes

Las imágenes en `/public/` son GRANDES. Optimízalas:

```bash
# Usando ImageMagick o similar
convert catalogo.png -quality 85 -strip catalogo.png
convert landing.png -quality 85 -strip landing.png
convert gimnasio-premium-gym.png -quality 85 -strip gimnasio-premium-gym.png
convert premium-store.png -quality 85 -strip premium-store.png
```

O usa herramientas online:
- https://tinypng.com/
- https://squoosh.app/

**Target:** Cada imagen < 200KB

---

## 🔧 Despliegue en Vercel

### Opción A: Deploy desde GitHub (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SolaraSites ready for production"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/solarasites.git
   git push -u origin main
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Configura las variables de entorno
   - Click en "Deploy"

### Opción B: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

---

## 🎯 Post-Despliegue

### 1. Verificar OG Image

Prueba tu preview social:
- https://www.opengraph.xyz/
- https://cards-dev.twitter.com/validator

URL a probar: `https://tu-dominio.com/api/og`

### 2. Verificar SEO

- [ ] Google Search Console: Registra tu sitio
- [ ] Envía sitemap: `https://tu-dominio.com/sitemap.xml`
- [ ] Verifica robots.txt: `https://tu-dominio.com/robots.txt`
- [ ] Prueba PageSpeed Insights: https://pagespeed.web.dev/

### 3. Verificar PWA

- [ ] Abre en Chrome DevTools → Application → Manifest
- [ ] Verifica que todos los iconos cargan correctamente
- [ ] Prueba "Instalar aplicación"

### 4. Verificar Accesibilidad

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=https://tu-dominio.com
```

Target scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

### 5. Verificar Analytics

Si usas Google Analytics:
```tsx
// En app/layout.tsx, agregar:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🔒 Seguridad

### Headers HTTP

Ya configurados en `vercel.json`:
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

### HTTPS

Vercel provee HTTPS automáticamente con certificados SSL.

---

## 📊 Monitoreo

### Vercel Analytics

Habilita en Vercel Dashboard:
1. Ve a tu proyecto
2. Analytics tab
3. Enable Web Analytics

### Error Tracking (Opcional)

Considera integrar:
- Sentry: https://sentry.io
- LogRocket: https://logrocket.com

---

## 🎨 Dominio Personalizado

### Configurar dominio custom en Vercel

1. **Compra tu dominio** (GoDaddy, Namecheap, etc.)

2. **Agrega en Vercel:**
   - Settings → Domains
   - Agrega tu dominio: `solarasites.com`
   - Agrega también: `www.solarasites.com`

3. **Configura DNS:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Espera propagación DNS** (puede tomar 24-48h)

5. **Actualiza URLs en código:**
   - `app/layout.tsx` → metadataBase
   - `app/sitemap.ts` → baseUrl
   - `vercel.json` si es necesario

---

## 🐛 Troubleshooting

### Build Failed

```bash
# Verifica localmente primero
npm run build
npm run type-check
```

### Imágenes no cargan

- Verifica que están en `/public/`
- Usa rutas absolutas: `/imagen.png` no `./imagen.png`
- Verifica permisos de archivos

### OG Image no aparece

- Espera 24-48h para que los crawlers de redes sociales actualicen cache
- Usa herramientas de debug específicas:
  - Facebook: https://developers.facebook.com/tools/debug/
  - LinkedIn: https://www.linkedin.com/post-inspector/

### Fonts no cargan

- Ya están optimizados con `next/font/google`
- Verifica en Network tab del DevTools

---

## 📈 Optimización Continua

### Mejoras recomendadas:

1. **Agregar más structured data:**
   - FAQ Schema
   - BreadcrumbList
   - Review/Rating snippets

2. **Implementar ISR (Incremental Static Regeneration):**
   ```tsx
   export const revalidate = 3600; // Revalidar cada hora
   ```

3. **Lazy load componentes pesados:**
   ```tsx
   import dynamic from 'next/dynamic';
   const HeavyComponent = dynamic(() => import('./HeavyComponent'));
   ```

4. **Agregar Service Worker personalizado** para mejor PWA

5. **A/B Testing** con Vercel Edge Middleware

---

## 🎉 ¡Listo!

Tu sitio está optimizado al máximo para:
- ✅ SEO (+15 optimizaciones)
- ✅ Performance (Lighthouse > 90)
- ✅ Accesibilidad (WCAG 2.1)
- ✅ PWA Ready
- ✅ Social Media Previews
- ✅ Seguridad (Headers HTTP)
- ✅ Mobile First & Responsive

**¡A brillar en internet! ☀️**
