# Iconos y Favicons

Este directorio debe contener los siguientes iconos generados a partir de tu logo:

## Archivos requeridos:

```
/public/icons/
├── favicon-16x16.png       # Favicon pequeño
├── favicon-32x32.png       # Favicon estándar
├── apple-touch-icon.png    # 180x180 - iOS
├── icon-72x72.png         # Android
├── icon-96x96.png         # Android
├── icon-128x128.png       # Android
├── icon-144x144.png       # Android
├── icon-152x152.png       # iOS
├── icon-192x192.png       # Android
├── icon-384x384.png       # Android
└── icon-512x512.png       # Android, PWA
```

## Cómo generar:

### Opción 1: Usando logoV2.png existente
Usa una herramienta online como:
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/

### Opción 2: Usando ImageMagick (CLI)
```bash
cd public
convert logoV2.png -resize 16x16 icons/favicon-16x16.png
convert logoV2.png -resize 32x32 icons/favicon-32x32.png
convert logoV2.png -resize 180x180 icons/apple-touch-icon.png
convert logoV2.png -resize 72x72 icons/icon-72x72.png
convert logoV2.png -resize 96x96 icons/icon-96x96.png
convert logoV2.png -resize 128x128 icons/icon-128x128.png
convert logoV2.png -resize 144x144 icons/icon-144x144.png
convert logoV2.png -resize 152x152 icons/icon-152x152.png
convert logoV2.png -resize 192x192 icons/icon-192x192.png
convert logoV2.png -resize 384x384 icons/icon-384x384.png
convert logoV2.png -resize 512x512 icons/icon-512x512.png
```

### Opción 3: Usando Sharp (Node.js)
```javascript
const sharp = require('sharp');
const sizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];

sizes.forEach(size => {
  sharp('logoV2.png')
    .resize(size, size)
    .toFile(`icons/icon-${size}x${size}.png`);
});
```

## Importante:
- Los iconos deben tener fondo transparente o el color de tu marca
- El logo debe ser claramente visible en tamaños pequeños
- Usa formato PNG para mejor compatibilidad
