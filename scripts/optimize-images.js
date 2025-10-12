const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Imágenes a optimizar
const images = [
  { input: 'landing.png', output: 'landing-optimized.webp', maxWidth: 800 },
  { input: 'catalogo.png', output: 'catalogo-optimized.webp', maxWidth: 800 },
  { input: 'premium-store.png', output: 'premium-store-optimized.webp', maxWidth: 1200 },
  { input: 'gimnasio-premium-gym.png', output: 'gimnasio-premium-gym-optimized.webp', maxWidth: 1200 },
];

async function optimizeImages() {
  console.log('🖼️  Optimizando imágenes para mejor performance...\n');

  for (const img of images) {
    const inputPath = path.join(publicDir, img.input);
    const outputPath = path.join(publicDir, img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${img.input} no encontrado, saltando...`);
      continue;
    }

    try {
      const metadata = await sharp(inputPath).metadata();
      const inputSize = fs.statSync(inputPath).size;

      await sharp(inputPath)
        .resize(img.maxWidth, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const outputSize = fs.statSync(outputPath).size;
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`✅ ${img.input} → ${img.output}`);
      console.log(`   ${(inputSize / 1024 / 1024).toFixed(2)} MB → ${(outputSize / 1024).toFixed(2)} KB`);
      console.log(`   Reducción: ${savings}%\n`);
    } catch (error) {
      console.error(`❌ Error optimizando ${img.input}:`, error.message);
    }
  }

  console.log('🎉 Optimización completada!\n');
  console.log('📝 Próximos pasos:');
  console.log('1. Actualiza las rutas en tus componentes:');
  console.log('   /landing.png → /landing-optimized.webp');
  console.log('   /catalogo.png → /catalogo-optimized.webp');
  console.log('2. Ejecuta: pnpm run build');
  console.log('3. Prueba performance con Lighthouse\n');
}

optimizeImages().catch(console.error);
