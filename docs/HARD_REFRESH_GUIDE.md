# 🔄 HARD REFRESH - Eliminar Caché del Navegador

## ⚠️ IMPORTANTE

Después de arreglar los clientes de Supabase, debes hacer **HARD REFRESH** para eliminar JavaScript cacheado.

---

## 🔧 PASO 1: REBUILD (Si estás en desarrollo)

```bash
# Detén el servidor (Ctrl+C)
# Luego rebuild
pnpm run build
pnpm run start
```

---

## 🌐 PASO 2: HARD REFRESH EN EL NAVEGADOR

### Google Chrome / Edge / Brave

**Opción 1 - Teclado:**
```
Windows/Linux: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

**Opción 2 - DevTools:**
1. Abre DevTools (F12)
2. Click derecho en el botón de refresh ⟳
3. Selecciona "Empty Cache and Hard Reload"

### Firefox

```
Windows/Linux: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### Safari

```
Cmd + Option + R
```

---

## 🧹 PASO 3: LIMPIAR STORAGE (Opcional pero recomendado)

1. Abre **Chrome DevTools** (F12)
2. Ve a la pestaña **Application**
3. En el panel izquierdo, busca **Storage**
4. Click derecho → **Clear site data**
5. Asegúrate que esté marcado:
   - ✅ Local storage
   - ✅ Session storage
   - ✅ IndexedDB
   - ✅ Cookies
6. Click **Clear site data**

---

## ✅ VERIFICAR QUE FUNCIONÓ

1. **Recarga la página** (Hard Refresh)
2. **Abre Console** (F12 → Console)
3. **Navega a /admin**
4. **Verifica:**

### ✅ SIN ERRORES
```
Console limpia, sin warnings
```

### ❌ SI AÚN APARECE
```
Multiple GoTrueClient instances detected...
```

**Entonces:**
- Cierra TODAS las pestañas del sitio
- Cierra el navegador completamente
- Abre de nuevo
- Navega a la URL

---

## 🔍 VERIFICAR EN NETWORK TAB

1. Abre **DevTools** (F12)
2. Ve a **Network** tab
3. Recarga la página
4. Busca archivos `.js` en la lista
5. Verifica que la columna **Size** diga "**from disk cache**" o muestre tamaño real
6. Si dice "**memory cache**", haz hard refresh de nuevo

---

## 💡 SI EL PROBLEMA PERSISTE

### 1. Verificar que el build es nuevo

```bash
# Ver fecha de los archivos
ls -la .next/static/chunks/

# Si son viejos, force rebuild
rm -rf .next
pnpm run build
pnpm run start
```

### 2. Usar modo incognito

```
Chrome: Ctrl + Shift + N
Firefox: Ctrl + Shift + P
Safari: Cmd + Shift + N
```

Abre el sitio en incognito. Si funciona ahí, el problema es caché.

### 3. Desactivar caché en DevTools

1. Abre DevTools (F12)
2. Ve a **Network** tab
3. Marca checkbox "**Disable cache**"
4. Mantén DevTools abierto mientras navegas

---

## 📊 RESUMEN DE CAMBIOS APLICADOS

### Archivos modificados:

1. ✅ `/app/admin/page.tsx` - useMemo para cliente
2. ✅ `/app/admin/login/page.tsx` - useMemo para cliente
3. ✅ `/app/admin/messages/page.tsx` - 
   - useMemo para cliente
   - Removido import de cliente básico
   - Cambiado `supabase` → `supabaseAuth` en todas las queries

### Instancias antes:
```
❌ 3-4 instancias de GoTrueClient
```

### Instancias ahora:
```
✅ 1 instancia por página (memoizada)
```

---

## 🎯 RESULTADO ESPERADO

Después del hard refresh:

```
✅ Console limpia sin warnings
✅ Sin "Multiple GoTrueClient instances"
✅ Sin errores 406
✅ Auth funcionando correctamente
✅ Mensajes cargando correctamente
```

---

## 🚨 SI NADA FUNCIONA

Contacta y proporciona:

1. Screenshot de la consola con el error
2. Screenshot de Network tab mostrando los .js files
3. Output de: `ls -la .next/static/chunks/ | head`
4. Navegador y versión que estás usando

---

**Haz el hard refresh ahora:** `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac) 🔄
