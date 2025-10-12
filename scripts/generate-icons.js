/**
 * Script para generar todos los iconos necesarios desde logoV2.png
 * Requiere: npm install sharp
 * Uso: node scripts/generate-icons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../public/logoV2.png');
const outputDir = path.join(__dirname, '../public/icons');

// Crear directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Definir todos los tamaños necesarios
const iconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'icon-72x72.png', size: 72 },
  { name: 'icon-96x96.png', size: 96 },
  { name: 'icon-128x128.png', size: 128 },
  { name: 'icon-144x144.png', size: 144 },
  { name: 'icon-152x152.png', size: 152 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-384x384.png', size: 384 },
  { name: 'icon-512x512.png', size: 512 },
];

async function generateIcons() {
  console.log('🎨 Generando iconos desde logoV2.png...\n');

  try {
    // Verificar que existe el archivo de entrada
    if (!fs.existsSync(inputImage)) {
      throw new Error(`No se encontró el archivo: ${inputImage}`);
    }

    // Generar cada tamaño
    for (const { name, size } of iconSizes) {
      const outputPath = path.join(outputDir, name);
      
      await sharp(inputImage)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 6, g: 6, b: 8, alpha: 1 } // bgMain color
        })
        .png({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✅ Generado: ${name} (${size}x${size})`);
    }

    console.log('\n🎉 ¡Todos los iconos generados exitosamente!');
    console.log(`📁 Ubicación: ${outputDir}`);

  } catch (error) {
    console.error('❌ Error generando iconos:', error.message);
    process.exit(1);
  }
}

generateIcons();
