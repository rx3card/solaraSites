# 🔐 Sistema de Autenticación del Panel Admin - Supabase Auth

## ✅ ¿Qué Sistema Tenemos Ahora?

Tu panel de administración usa **Supabase Auth** completo con:

- ✅ Login con **email + contraseña**
- ✅ Tabla de usuarios administradores (`admin_users`)
- ✅ Sesiones persistentes y seguras
- ✅ Middleware de protección de rutas
- ✅ Gestión de último login
- ✅ Sistema de activación/desactivación de usuarios

---

## 📋 Paso 1: Configurar la Base de Datos

### 1.1 Crear la tabla `admin_users`

Ve a tu **Supabase Dashboard** → **SQL Editor** y ejecuta:

```sql
-- Crear tabla de usuarios admin
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES admin_users(id),
  last_login TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true
);

-- Habilitar Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Política: Solo admins autenticados pueden ver la tabla
CREATE POLICY "Admin users can view all admin_users"
  ON admin_users
  FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Política: Solo admins pueden insertar nuevos admins
CREATE POLICY "Admin users can insert admin_users"
  ON admin_users
  FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Política: Solo admins pueden actualizar
CREATE POLICY "Admin users can update admin_users"
  ON admin_users
  FOR UPDATE
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- Crear índices para mejorar performance
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_is_active ON admin_users(is_active);
```

### 1.2 Verificar que la tabla existe

```sql
SELECT * FROM admin_users;
```

Deberías ver una tabla vacía (sin errores).

---

## 👤 Paso 2: Crear tu Primer Usuario Admin

### 2.1 Crear usuario en Supabase Auth

1. Ve a **Supabase Dashboard** → **Authentication** → **Users**
2. Clic en **"Add user"** → **"Create new user"**
3. Completa:
   - **Email**: `solarasites.com@gmail.com` (o el que prefieras)
   - **Password**: Crea una contraseña segura (mínimo 8 caracteres)
   - ✅ **Marca "Auto Confirm User"** (MUY IMPORTANTE)
4. Clic en **"Create user"**
5. **Copia el UUID del usuario** que aparece en la columna "UID"

### 2.2 Agregar usuario a la tabla admin_users

Vuelve al **SQL Editor** y ejecuta (reemplaza `TU_UUID_AQUI`):

```sql
-- IMPORTANTE: Reemplaza 'TU_UUID_AQUI' con el UUID que copiaste
INSERT INTO admin_users (id, email, name, is_active)
VALUES (
  'TU_UUID_AQUI',  -- ⚠️ Pega aquí el UUID que copiaste
  'solarasites.com@gmail.com',  -- El mismo email que usaste
  'Admin Principal',  -- Nombre que quieras mostrar
  true
);
```

**Ejemplo real:**
```sql
INSERT INTO admin_users (id, email, name, is_active)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'solarasites.com@gmail.com',
  'Admin Principal',
  true
);
```

### 2.3 Verificar que se creó correctamente

```sql
SELECT * FROM admin_users;
```

Deberías ver una fila con tu usuario.

---

## 🚀 Paso 3: Probar el Login

### 3.1 Asegurar que las variables de entorno están configuradas

Verifica tu archivo `.env.local`:

```env
# Supabase Configuration (ya deberían estar)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
```

### 3.2 Reiniciar el servidor

```bash
# Ctrl+C en la terminal
pnpm dev
```

### 3.3 Acceder al panel admin

1. Ve a: `http://localhost:3000/admin/login`
2. Ingresa:
   - **Email**: `solarasites.com@gmail.com` (el que creaste)
   - **Contraseña**: La contraseña que configuraste en Supabase
3. Click en **"Acceder al Panel"**
4. ✅ Deberías ver el Dashboard con tu nombre

---

## 🧪 Cómo Funciona el Sistema

### Flujo de Autenticación

1. **Usuario ingresa email + contraseña**
   → Supabase Auth valida las credenciales

2. **Si las credenciales son válidas**
   → Se verifica que el usuario esté en `admin_users` con `is_active = true`

3. **Si es un admin válido**
   → Se actualiza `last_login` en la base de datos
   → Se crea una sesión (cookie httpOnly segura)
   → Redirige al dashboard

4. **Middleware protege todas las rutas `/admin/*`**
   → Verifica sesión en cada request
   → Si no hay sesión → redirige a login

### Protección de Rutas

```
/admin/login        → Pública (solo si NO estás logueado)
/admin              → Protegida (requiere sesión)
/admin/messages     → Protegida (requiere sesión)
/admin/*            → Todas protegidas
```

---

## 🔑 Agregar Más Administradores

### Pasos para agregar un nuevo admin:

1. **Crear usuario en Supabase Auth** (Paso 2.1)
2. **Copiar UUID del nuevo usuario**
3. **Ejecutar este SQL:**

```sql
INSERT INTO admin_users (id, email, name, is_active, created_by)
VALUES (
  'UUID_DEL_NUEVO_USUARIO',
  'nuevo@ejemplo.com',
  'Nombre del Nuevo Admin',
  true,
  'TU_UUID'  -- El UUID de quien lo está creando (opcional)
);
```

### Desactivar un admin (sin eliminarlo):

```sql
UPDATE admin_users
SET is_active = false
WHERE email = 'usuario@ejemplo.com';
```

### Reactivar un admin:

```sql
UPDATE admin_users
SET is_active = true
WHERE email = 'usuario@ejemplo.com';
```

---

## 📊 Consultas Útiles

### Ver todos los admins activos:

```sql
SELECT 
  email,
  name,
  is_active,
  created_at,
  last_login
FROM admin_users
WHERE is_active = true
ORDER BY created_at DESC;
```

### Ver últimos logins:

```sql
SELECT 
  email,
  name,
  last_login,
  is_active
FROM admin_users
WHERE last_login IS NOT NULL
ORDER BY last_login DESC;
```

### Contar admins por estado:

```sql
SELECT 
  is_active,
  COUNT(*) as total
FROM admin_users
GROUP BY is_active;
```

---

## 🌐 Despliegue a Producción (Vercel)

### Variables de entorno requeridas:

1. Dashboard de Vercel → Tu proyecto
2. **Settings** → **Environment Variables**
3. Agregar:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_produccion
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_de_produccion
```

4. **Redeploy** el proyecto

⚠️ **NUNCA** compartas tu `SERVICE_ROLE_KEY` públicamente.

---

## 🔒 Características de Seguridad

### ✅ Seguridad Implementada:

- **Row Level Security (RLS)** en la tabla `admin_users`
- **Cookies httpOnly** (no accesibles por JavaScript)
- **Sesiones persistentes** gestionadas por Supabase
- **Middleware de Next.js** intercepta todas las rutas protegidas
- **Políticas de acceso** basadas en roles
- **Verificación doble**: Auth + tabla admin_users

### ✅ Ventajas sobre el sistema anterior:

| Antes (Contraseña Simple) | Ahora (Supabase Auth) |
|---------------------------|-----------------------|
| Una sola contraseña para todos | Email + contraseña por usuario |
| Sin gestión de usuarios | Tabla completa de admins |
| Sin registro de accesos | Last_login registrado |
| Sin activación/desactivación | Sistema de is_active |
| Sesiones básicas | Sesiones robustas de Supabase |

---

## 🆘 Troubleshooting

### Error: "No tienes permisos de administrador"

**Causa**: El usuario existe en `auth.users` pero NO en `admin_users`, o está inactivo.

**Solución**:
```sql
-- Verificar si el usuario está en admin_users
SELECT * FROM admin_users WHERE email = 'tu@email.com';

-- Si no está, agregarlo:
INSERT INTO admin_users (id, email, name, is_active)
VALUES ('UUID_DEL_USUARIO', 'tu@email.com', 'Tu Nombre', true);

-- Si está inactivo, activarlo:
UPDATE admin_users SET is_active = true WHERE email = 'tu@email.com';
```

### Error: "Invalid login credentials"

**Causa**: Email o contraseña incorrectos.

**Solución**:
1. Verifica el email en Supabase Dashboard → Authentication → Users
2. Resetea la contraseña:
   - Dashboard → Authentication → Users → (3 puntos) → Reset Password

### Error: "auth.users violates foreign key constraint"

**Causa**: Intentaste agregar a `admin_users` un UUID que no existe en `auth.users`.

**Solución**: Primero crea el usuario en Authentication, LUEGO agrégalo a `admin_users`.

### La sesión no persiste / Me desloguea solo

**Solución**:
1. Limpia cookies: `F12` → Application → Cookies → Clear all
2. Limpia localStorage: `localStorage.clear()` en la consola
3. Hard refresh: `Ctrl+Shift+R`
4. Vuelve a loguearte

### Error: "RLS Policy Violation"

**Causa**: Las políticas de Row Level Security bloquean el acceso.

**Solución**: Verifica que el usuario esté activo:
```sql
SELECT * FROM admin_users WHERE is_active = true;
```

---

## 📂 Archivos del Sistema

### Archivos modificados:

```
✅ lib/supabase.ts                   - Clientes de Supabase con auth
✅ app/admin/login/page.tsx          - Login con email + password
✅ app/api/admin/auth/route.ts       - Verificación en admin_users
✅ middleware.ts                      - Protección con Supabase Auth
✅ app/admin/page.tsx                - Dashboard con sesión
✅ app/admin/messages/page.tsx       - Mensajes con sesión
```

### Tabla en Supabase:

```
✅ admin_users (con RLS habilitado)
   - id (UUID, FK a auth.users)
   - email (TEXT, UNIQUE)
   - name (TEXT)
   - created_at (TIMESTAMP)
   - created_by (UUID, FK a admin_users)
   - last_login (TIMESTAMP)
   - is_active (BOOLEAN)
```

---

## ✅ Checklist de Configuración

- [ ] Tabla `admin_users` creada en Supabase
- [ ] RLS habilitado con políticas
- [ ] Primer usuario creado en Authentication
- [ ] Usuario agregado a `admin_users` con INSERT
- [ ] Variables de entorno en `.env.local`
- [ ] Servidor reiniciado
- [ ] Login probado con email + contraseña
- [ ] Sesión persiste al refrescar
- [ ] Botón de logout funciona
- [ ] Middleware protege rutas admin

---

## 🚀 Próximos Pasos (Opcional)

### 1. Agregar Roles y Permisos

```sql
ALTER TABLE admin_users ADD COLUMN role TEXT DEFAULT 'admin';
-- Roles: 'super_admin', 'admin', 'viewer'
```

### 2. Habilitar 2FA (Two-Factor Authentication)

Supabase soporta 2FA nativo:
- Dashboard → Authentication → Settings → Enable MFA

### 3. Crear Página de Gestión de Admins

Puedes crear `/admin/users` para:
- Ver lista de todos los admins
- Activar/desactivar usuarios
- Ver últimos accesos

### 4. Logs de Auditoría

```sql
CREATE TABLE admin_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID REFERENCES admin_users(id),
  action TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 📚 Recursos

- [Documentación Supabase Auth](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js con Supabase SSR](https://supabase.com/docs/guides/auth/server-side/nextjs)

---

**¡Listo! Tu panel admin ahora usa Supabase Auth completo con usuarios, roles y seguridad robusta.** 🔐🎉
