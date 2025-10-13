# 🚀 SolaraSites - Next.js Version

Migración completa de SolaraSites a Next.js 15 con TypeScript y Tailwind CSS.

## 📦 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 3.4
- **Fuentes:** Google Fonts (Inter + Poppins)
- **Formularios:** React Hook Form + Zod
- **Iconos:** Lucide React
- **Package Manager:** pnpm

## 🏗️ Estructura del Proyecto

```
solarasites/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales + Tailwind
│   ├── layout.tsx         # Layout principal con metadata SEO
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React reutilizables
├── lib/                   # Utilidades y helpers
│   └── utils.ts          # Función cn() para clsx + tailwind-merge
├── public/               # Assets estáticos (imágenes, logos, etc)
├── .env.example          # Variables de entorno de ejemplo
├── next.config.ts        # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias del proyecto
```

## 🚀 Comandos Disponibles

### Desarrollo
```bash
pnpm dev
# Inicia el servidor de desarrollo en http://localhost:3000
```

### Producción
```bash
pnpm build
# Crea el build de producción optimizado

pnpm start
# Inicia el servidor de producción
```

### Otros
```bash
pnpm lint
# Ejecuta el linter de Next.js

pnpm type-check
# Verifica los tipos de TypeScript sin compilar
```

## 🎨 Configuración de Colores

Los colores personalizados de SolaraSites están configurados en `tailwind.config.ts`:

```typescript
colors: {
  solaraOrange: '#FF8C29',
  solaraGold: '#FFC65D',
  solaraBlue: '#5FB4FF',
  solaraPurple: '#A855F7',
  solaraPink: '#EC4899',
  solaraGreen: '#10B981',
  bgMain: '#060608',
  surface: '#0f1113',
  surfaceLight: '#1a1c1f',
}
```

Úsalos en tus componentes: `className="bg-solaraOrange text-solaraGold"`

## 🎭 Animaciones Personalizadas

Animaciones disponibles en Tailwind:

- `animate-float` - Movimiento flotante suave
- `animate-glow` - Efecto de brillo pulsante
- `animate-slide-up` - Deslizamiento desde abajo
- `animate-fade-in` - Aparición gradual

## 📝 Variables de Entorno

Copia `.env.example` a `.env.local` y configura las variables necesarias:

```bash
cp .env.example .env.local
```

Variables importantes (se configurarán en Fase 3):
- `NEXT_PUBLIC_SUPABASE_URL` - URL de Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Clave pública de Supabase
- `RESEND_API_KEY` - API Key de Resend para emails
- `CONTACT_EMAIL` - Email donde llegan las notificaciones

## 📚 Próximos Pasos

### ✅ Fase 1: Setup Inicial (COMPLETADA)
- [x] Proyecto Next.js inicializado
- [x] TypeScript configurado
- [x] Tailwind CSS configurado
- [x] Estructura de carpetas creada

### 🔄 Fase 2: Migración de Componentes (PENDIENTE)
- [ ] Migrar Header/Navigation
- [ ] Migrar Hero Section
- [ ] Migrar sección de Servicios
- [ ] Migrar Portfolio
- [ ] Migrar Pricing
- [ ] Migrar Process
- [ ] Migrar Testimonials
- [ ] Migrar Contact Form
- [ ] Migrar FAQ
- [ ] Migrar Footer

### ✅ Fase 3: Formulario Funcional (COMPLETADA)
- [x] Configurar Supabase
- [x] Crear API Route `/api/contact`
- [x] Implementar validación con Zod
- [x] Configurar Resend para emails
- [x] Crear panel de administración
- [x] React Hook Form con validación en tiempo real
- [x] Mensajes de éxito/error personalizados
- [x] Panel admin en `/admin/messages`

**📖 Ver guía completa:** `CONFIGURACION-FASE3.md`

### 🔄 Fase 4: Testing y Deploy (PENDIENTE)
- [ ] Optimizar imágenes
- [ ] Pruebas de funcionalidad
- [ ] Optimización de imágenes
- [ ] Testing de performance
- [ ] Deploy a Vercel
- [ ] Configurar dominio personalizado

## 🌐 Deploy

Este proyecto está optimizado para desplegarse en Vercel:

```bash
# Conecta tu repositorio con Vercel
vercel

# O despliega directamente
vercel --prod
```

## 📄 Documentación Adicional

- **index.html original:** El archivo HTML original se mantiene como referencia
- **MEJORAS_REALIZADAS.md:** Historial de mejoras de la versión HTML
- **GIT_COMMANDS.md:** Comandos útiles de Git

## 💡 Tips de Desarrollo

1. **Componentes:** Crea componentes pequeños y reutilizables en `/components`
2. **Tipos:** Define interfaces TypeScript para props y datos
3. **Estilos:** Usa la función `cn()` para combinar clases de Tailwind dinámicamente
4. **Imágenes:** Usa el componente `<Image>` de Next.js para optimización automática
5. **SEO:** Configura metadata en cada página para mejor posicionamiento

## 🤝 Contribuir

1. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`
2. Haz tus cambios y commit: `git commit -m "Add: nueva funcionalidad"`
3. Push: `git push origin feature/nueva-funcionalidad`
4. Crea un Pull Request

---

**Hecho con ❤️ en Colombia por SolaraSites**

© 2025 SolaraSites. Todos los derechos reservados.
