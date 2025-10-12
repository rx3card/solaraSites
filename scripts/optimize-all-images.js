const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Lista de todas las imágenes PNG a optimizar
const imagesToOptimize = [
  // Hero images (ya optimizadas pero las incluimos por completitud)
  { input: 'landing.png', output: 'landing-optimized.webp', quality: 75 },
  { input: 'catalogo.png', output: 'catalogo-optimized.webp', quality: 75 },
  { input: 'premium-store.png', output: 'premium-store-optimized.webp', quality: 75 },
  { input: 'gimnasio-premium-gym.png', output: 'gimnasio-premium-gym-optimized.webp', quality: 75 },
  
  // Services images (NUEVAS - necesitan optimización)
  { input: 'images/services/Landing_Basic_WebSite.png', output: 'images/services/Landing_Basic_WebSite-optimized.webp', quality: 80 },
  { input: 'images/services/Corporate_Website.png', output: 'images/services/Corporate_Website-optimized.webp', quality: 80 },
  { input: 'images/services/App_Ecommerce.png', output: 'images/services/App_Ecommerce-optimized.webp', quality: 80 },
  
  // Logo
  { input: 'logoV2.png', output: 'logoV2-optimized.webp', quality: 90 },
];

async function optimizeImage(input, output, quality) {
  const inputPath = path.join(publicDir, input);
  const outputPath = path.join(publicDir, output);
  
  // Verificar si el archivo existe
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Saltando ${input} - no existe`);
    return;
  }
  
  // Crear directorio de salida si no existe
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  try {
    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);
    
    await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ ${input}`);
    console.log(`   ${inputSizeKB} KB → ${outputSizeKB} KB (${savings}% reducción)\n`);
  } catch (error) {
    console.error(`❌ Error optimizando ${input}:`, error.message);
  }
}

async function main() {
  console.log('🎨 Optimizando TODAS las imágenes...\n');
  
  for (const { input, output, quality } of imagesToOptimize) {
    await optimizeImage(input, output, quality);
  }
  
  console.log('🎉 ¡Optimización completa!\n');
  console.log('📊 Resumen de archivos generados:');
  console.log('   /landing-optimized.webp');
  console.log('   /catalogo-optimized.webp');
  console.log('   /premium-store-optimized.webp');
  console.log('   /gimnasio-premium-gym-optimized.webp');
  console.log('   /images/services/Landing_Basic_WebSite-optimized.webp');
  console.log('   /images/services/Corporate_Website-optimized.webp');
  console.log('   /images/services/App_Ecommerce-optimized.webp');
  console.log('   /logoV2-optimized.webp\n');
}

main().catch(console.error);
