# 🚀 Comandos Git para Subir SolaraSites a GitHub

## 📋 Pasos para Subir tu Proyecto

### 1️⃣ Inicializar Git (si no está inicializado)
```bash
git init
```

### 2️⃣ Agregar todos los archivos
```bash
git add .
```

### 3️⃣ Hacer el primer commit
```bash
git commit -m "Initial commit: SolaraSites v1.0 - Website completo con diseño premium"
```

### 4️⃣ Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repo: `solaraSites` o `solara-sites`
3. Descripción: "🌟 Agencia de diseño web premium en Colombia | Landing pages, sitios corporativos y e-commerce"
4. **NO** inicialices con README (ya tienes uno)
5. Click en "Create repository"

### 5️⃣ Conectar con GitHub
```bash
# Reemplaza TU-USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/solaraSites.git
```

### 6️⃣ Cambiar a rama main (si estás en master)
```bash
git branch -M main
```

### 7️⃣ Subir todo a GitHub
```bash
git push -u origin main
```

---

## 🔄 Comandos para Futuras Actualizaciones

### Hacer cambios y subirlos
```bash
# 1. Ver qué cambió
git status

# 2. Agregar cambios
git add .

# 3. Hacer commit descriptivo
git commit -m "Update: Mejora en sección de servicios"

# 4. Subir a GitHub
git push
```

### Ver historial de cambios
```bash
git log --oneline
```

### Crear una nueva rama para features
```bash
git checkout -b feature/nueva-funcionalidad
```

### Volver a la rama principal
```bash
git checkout main
```

---

## 🎯 Ejemplos de Buenos Mensajes de Commit

```bash
# Nuevas características
git commit -m "Add: Sección de testimonios de clientes"
git commit -m "Add: Formulario de contacto funcional con Supabase"

# Mejoras
git commit -m "Update: Optimización de imágenes para mejor performance"
git commit -m "Update: Mejora en responsive design para tablets"

# Correcciones
git commit -m "Fix: Error en navegación mobile"
git commit -m "Fix: Corrección de typos en sección de precios"

# Diseño
git commit -m "Style: Nuevos colores en botones CTA"
git commit -m "Style: Mejora en animaciones de hover"

# Documentación
git commit -m "Docs: Actualización del README con nuevas features"
```

---

## 📌 Tips Importantes

### ✅ Antes de hacer push:
- Revisa que no subes archivos sensibles (contraseñas, API keys)
- Verifica que las imágenes no sean demasiado pesadas
- Asegúrate que el .gitignore está configurado correctamente

### ✅ Para colaborar:
- Usa ramas para nuevas features
- Haz commits frecuentes y descriptivos
- Pull antes de push para evitar conflictos

### ✅ Para mantener limpio el repo:
- No subas archivos de sistema (.DS_Store, Thumbs.db)
- No subas carpetas de IDEs (.vscode, .idea)
- No subas node_modules si agregas npm después

---

## 🔧 Comandos Útiles Avanzados

### Deshacer último commit (mantener cambios)
```bash
git reset --soft HEAD~1
```

### Ver diferencias antes de commit
```bash
git diff
```

### Guardar cambios temporalmente
```bash
git stash
git stash pop  # Para recuperarlos
```

### Clonar tu repo en otra máquina
```bash
git clone https://github.com/TU-USUARIO/solaraSites.git
```

---

## 🎨 Configurar GitHub Profile

Para que tu repo se vea profesional:

1. **Agrega topics** en GitHub:
   - `web-design`
   - `landing-page`
   - `tailwindcss`
   - `html-css-javascript`
   - `colombia`
   - `freelance`

2. **Configura GitHub Pages** (opcional):
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: main / root
   - Tu sitio estará en: `https://TU-USUARIO.github.io/solaraSites`

3. **Agrega Website** en la descripción del repo:
   - Apunta a: `https://solarasites.vercel.app/`

---

## ⚠️ Solución de Problemas Comunes

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/solaraSites.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Olvidaste el .gitignore
```bash
git rm -r --cached .
git add .
git commit -m "Update: Añadido .gitignore"
git push
```

---

## 📞 Ayuda

Si tienes problemas:
- 📖 Docs oficiales: https://docs.github.com/
- 💬 Stack Overflow: https://stackoverflow.com/questions/tagged/git
- 🎥 Tutorial Git: https://www.youtube.com/watch?v=HVsySz-h9r4

---

¡Listo para brillar en GitHub! 🌟
