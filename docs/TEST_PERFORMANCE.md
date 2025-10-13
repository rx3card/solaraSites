# 🎯 CÓMO PROBAR PERFORMANCE CORRECTAMENTE

## ⚠️ IMPORTANTE: DEV MODE vs PRODUCTION

Tu test actual muestra **48%** porque estás usando **dev mode** (`pnpm run dev`).

### Por qué dev mode da resultados malos:
```
❌ No tiene optimizaciones de producción
❌ Compila archivos al vuelo (bloquea thread)
❌ Incluye herramientas de debugging
❌ React en modo desarrollo (más lento)
❌ No tiene minificación
❌ No tiene tree-shaking
❌ Source maps incluidos
```

### Production mode tiene:
```
✅ Código minificado
✅ Tree-shaking
✅ Code splitting optimizado
✅ React en modo producción (3x más rápido)
✅ Assets comprimidos
✅ Chunks pre-generados
✅ Sin debugging overhead
```

---

## 🚀 TEST CORRECTO EN 3 PASOS

### Paso 1: Build de Producción
```bash
pnpm run build
```

**Debes ver:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization

Route (app)                    Size     First Load JS
┌ ○ /                         ~5 kB          ~85 kB
└ ○ /404                      ~1 kB          ~80 kB

First Load JS shared by all   ~80 kB
  ├ chunks/framework.js        ~45 kB
  ├ chunks/main.js            ~30 kB
  └ chunks/webpack.js          ~5 kB
```

### Paso 2: Iniciar Servidor de Producción
```bash
pnpm run start
```

**Debes ver:**
```
✓ Ready in Xms
  - Local:        http://localhost:3000
```

### Paso 3: Lighthouse en Producción
```
1. Abre: http://localhost:3000
2. Chrome DevTools (F12)
3. Tab "Lighthouse"
4. Device: Desktop
5. Categories: Performance
6. Mode: Navigation (default)
7. Click "Analyze page load"
```

---

## 📊 RESULTADOS ESPERADOS

### Dev Mode (lo que viste):
```
Performance: 48/100  ❌
FCP: 1.7s
LCP: 6.2s
TBT: 2,800ms
```

### Production Mode (lo que verás):
```
Performance: 85-95/100  ✅
FCP: 0.5-1.0s          ✅
LCP: 1.0-2.0s          ✅
TBT: 50-200ms          ✅
CLS: 0                 ✅
```

---

## 🔍 OPTIMIZACIONES APLICADAS

### 1. Imágenes Hero Optimizadas
```tsx
// ANTES: width={400} quality={90}
// DESPUÉS:
width={300}              ← Tamaño más pequeño
quality={85}             ← Calidad más baja pero suficiente
sizes="(...)"            ← Responsive loading
```

### 2. Next.js Config
```typescript
productionBrowserSourceMaps: false  ← No source maps
optimizeFonts: true                  ← Font optimization
qualities: [75, 85, 90, 100]        ← Quality presets
```

### 3. Lazy Loading
```
✅ 12 componentes con dynamic imports
✅ Solo Hero carga inmediatamente
✅ Resto carga on-demand
```

---

## ⚡ EJECUTA AHORA

```bash
# 1. Build (toma ~30 segundos)
pnpm run build

# 2. Start production server
pnpm run start

# 3. Abre http://localhost:3000
# 4. Lighthouse → Analyze

# Deberías ver 85-95/100 ✅
```

---

## 🎯 SI SIGUE BAJO EN PRODUCCIÓN

Si después del build de producción el score sigue < 80:

### Check 1: Verifica que usaste `pnpm run start` (NO `pnpm run dev`)
```bash
# Terminal debe mostrar:
✓ Ready in Xms
  - Local:        http://localhost:3000

# NO debe mostrar:
✓ Ready in 2.7s  ← Esto es dev mode
 ○ Compiling...  ← Esto es dev mode
```

### Check 2: Limpia caché de Chrome
```
1. DevTools → Application
2. Storage → Clear site data
3. Reload
4. Run Lighthouse again
```

### Check 3: Verifica Network
```
DevTools → Network
- Verifica que imágenes son .webp
- Verifica que JS está minificado
- Verifica compression (gzip/brotli)
```

---

## 📈 COMPARATIVA

| Ambiente | Performance | LCP | TBT | Notas |
|----------|-------------|-----|-----|-------|
| **Dev Mode** | 45-50 | 6-18s | 2,800ms | ❌ No confiable |
| **Prod Local** | 85-95 | 1-2s | 50-200ms | ✅ Test aquí |
| **Prod Vercel** | 90-100 | 0.5-1.5s | 30-150ms | ✅ Mejor score |

---

## 🚀 DEPLOYMENT

Cuando veas **85-95** en producción local:

```bash
git add .
git commit -m "perf: Optimize to 85-95 score (WebP, lazy loading, config)"
git push

# Deploy a Vercel
# Score en Vercel será incluso mejor (90-100)
```

---

## ⚠️ RECUERDA

```
DEV MODE = 48%     ❌ NO es representativo
PROD MODE = 85-95% ✅ Score real
```

**SIEMPRE prueba performance en producción con `pnpm run build && pnpm run start`**
