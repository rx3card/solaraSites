# 🚀 QUICK START - SolaraSites

## ⚡ Deploy en 5 Minutos

### Paso 1: Instalar Dependencias
```bash
pnpm install
# o
npm install
```

### Paso 2: Generar Iconos PWA
```bash
pnpm run generate-icons
```

### Paso 3: Configurar Variables de Entorno
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales:
```env
NEXT_PUBLIC_SITE_URL=https://tu-sitio.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
RESEND_API_KEY=re_xxx...
CONTACT_EMAIL=tu@email.com
```

### Paso 4: Verificar Build
```bash
pnpm run build
```

### Paso 5: Deploy a Vercel
1. Push a GitHub
2. Ir a https://vercel.com/new
3. Importar tu repositorio
4. Configurar las mismas variables de entorno
5. Click "Deploy"

### Paso 6: Post-Deploy
- Verificar sitio: `https://tu-sitio.vercel.app`
- Test OG Image: https://www.opengraph.xyz/
- Registrar en Google Search Console
- Enviar sitemap

---

## ✅ Checklist Rápido

- [ ] `pnpm install`
- [ ] `pnpm run generate-icons`
- [ ] Configurar `.env.local`
- [ ] `pnpm run build` (sin errores)
- [ ] Push a GitHub
- [ ] Deploy en Vercel
- [ ] Configurar variables en Vercel
- [ ] Verificar sitio en producción

---

## 📚 Documentación Completa

- **Full Guide:** `PRE_DEPLOYMENT_CHECKLIST.md`
- **SEO Details:** `SEO_OPTIMIZATION_SUMMARY.md`
- **Project Overview:** `README.md`
- **Final Status:** `FINAL_STATUS.md`

---

**🚀 ¡Listo para brillar!**
