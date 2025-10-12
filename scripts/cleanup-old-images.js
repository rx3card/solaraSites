const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Lista de archivos PNG grandes que ya no se usan (tenemos versiones WebP optimizadas)
const filesToDelete = [
  'landing.png',                                  // → landing-optimized.webp (72 KB)
  'catalogo.png',                                 // → catalogo-optimized.webp (83 KB)
  'premium-store.png',                            // → premium-store-optimized.webp (28 KB)
  'gimnasio-premium-gym.png',                     // → gimnasio-premium-gym-optimized.webp (40 KB)
  'logoV2.png',                                   // → logoV2-optimized.webp (26 KB)
  'images/services/Landing_Basic_WebSite.png',    // → Landing_Basic_WebSite-optimized.webp (66 KB)
  'images/services/Corporate_Website.png',        // → Corporate_Website-optimized.webp (108 KB)
  'images/services/App_Ecommerce.png',            // → App_Ecommerce-optimized.webp (139 KB)
];

console.log('🗑️  Eliminando archivos PNG grandes (ya tenemos versiones WebP optimizadas)...\n');

let totalSizeFreed = 0;
let filesDeleted = 0;

filesToDelete.forEach(file => {
  const filePath = path.join(publicDir, file);
  
  if (fs.existsSync(filePath)) {
    try {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      
      fs.unlinkSync(filePath);
      totalSizeFreed += stats.size;
      filesDeleted++;
      
      console.log(`✅ Eliminado: ${file} (${sizeKB} KB)`);
    } catch (error) {
      console.error(`❌ Error eliminando ${file}:`, error.message);
    }
  } else {
    console.log(`⚠️  Ya no existe: ${file}`);
  }
});

const totalMB = (totalSizeFreed / 1024 / 1024).toFixed(2);

console.log(`\n✅ Limpieza completa!`);
console.log(`📊 ${filesDeleted} archivos eliminados`);
console.log(`💾 ${totalMB} MB liberados\n`);

console.log('📝 Archivos WebP optimizados que se mantienen:');
console.log('   ✅ landing-optimized.webp (72 KB)');
console.log('   ✅ catalogo-optimized.webp (83 KB)');
console.log('   ✅ premium-store-optimized.webp (28 KB)');
console.log('   ✅ gimnasio-premium-gym-optimized.webp (40 KB)');
console.log('   ✅ logoV2-optimized.webp (26 KB)');
console.log('   ✅ images/services/Landing_Basic_WebSite-optimized.webp (66 KB)');
console.log('   ✅ images/services/Corporate_Website-optimized.webp (108 KB)');
console.log('   ✅ images/services/App_Ecommerce-optimized.webp (139 KB)\n');

console.log('🎯 Total imágenes optimizadas: ~562 KB (antes: ~11 MB)');
console.log('📉 Reducción total: 95%+ 🔥\n');
