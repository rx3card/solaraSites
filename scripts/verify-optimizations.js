const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando optimizaciones...\n');

const publicDir = path.join(__dirname, '..', 'public');
const checks = [];

// Check 1: Imágenes optimizadas existen
const optimizedImages = [
  'landing-optimized.webp',
  'catalogo-optimized.webp',
  'premium-store-optimized.webp',
  'gimnasio-premium-gym-optimized.webp'
];

console.log('📸 Verificando imágenes optimizadas:');
optimizedImages.forEach(img => {
  const exists = fs.existsSync(path.join(publicDir, img));
  const size = exists ? (fs.statSync(path.join(publicDir, img)).size / 1024).toFixed(2) : 'N/A';
  console.log(`  ${exists ? '✅' : '❌'} ${img} ${exists ? `(${size} KB)` : ''}`);
  checks.push(exists);
});

// Check 2: Archivos de configuración
console.log('\n⚙️  Verificando configuración:');
const configFiles = [
  'next.config.ts',
  'package.json',
  'vercel.json',
  'PERFORMANCE_OPTIMIZATION.md',
  'OPTIMIZACIONES_COMPLETADAS.md'
];

configFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, '..', file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  checks.push(exists);
});

// Check 3: Scripts
console.log('\n📜 Verificando scripts:');
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const requiredScripts = ['build', 'dev', 'optimize-images', 'generate-icons'];
requiredScripts.forEach(script => {
  const exists = !!packageJson.scripts[script];
  console.log(`  ${exists ? '✅' : '❌'} ${script}`);
  checks.push(exists);
});

// Resumen
const allPassed = checks.every(check => check === true);
console.log(`\n${allPassed ? '🎉' : '⚠️'} Resultado: ${checks.filter(Boolean).length}/${checks.length} verificaciones pasadas\n`);

if (allPassed) {
  console.log('✅ Todo listo para build de producción!');
  console.log('\nPróximos pasos:');
  console.log('  1. pnpm run build');
  console.log('  2. pnpm run start');
  console.log('  3. Prueba con Lighthouse\n');
} else {
  console.log('⚠️  Hay optimizaciones pendientes. Revisa los errores arriba.\n');
}
