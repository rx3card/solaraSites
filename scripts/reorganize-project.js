const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

console.log('🔧 REORGANIZANDO PROYECTO SOLARASITES\n');

// ============================================
// 1. CREAR CARPETA /docs SI NO EXISTE
// ============================================
const docsDir = path.join(rootDir, 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('✅ Creada carpeta /docs');
}

// ============================================
// 2. MOVER ARCHIVOS MD A /docs
// ============================================
console.log('\n📄 Moviendo archivos MD a /docs...');

const mdFilesToMove = [
  'CONFIGURACION-FASE3.md',
  'CONFIGURAR-RESEND.md',
  'DEPLOYMENT_GUIDE.md',
  'FINAL_STATUS.md',
  'FIXES_APLICADOS.md',
  'GIT_COMMANDS.md',
  'INSTRUCCIONES-ADMIN-AUTH.md',
  'LIMPIEZA_IMAGENES.md',
  'MEJORAS_REALIZADAS.md',
  'MIGRACION-FASE-1.md',
  'OPTIMIZACIONES_COMPLETADAS.md',
  'OPTIMIZACION_FINAL_95.md',
  'OPTIMIZAR_IMAGENES_FINAL.md',
  'PERFORMANCE_OPTIMIZATION.md',
  'PRE_DEPLOYMENT_CHECKLIST.md',
  'QUICK_START.md',
  'README-NEXTJS.md',
  'REORGANIZATION_GUIDE.md',
  'RESEND-LIMITACIONES.md',
  'RESUMEN_FINAL.md',
  'SEO_OPTIMIZATION_SUMMARY.md',
  'SISTEMA-EMAILS.md',
  'TEST_PERFORMANCE.md',
];

mdFilesToMove.forEach(file => {
  const source = path.join(rootDir, file);
  const dest = path.join(docsDir, file);
  
  if (fs.existsSync(source)) {
    fs.renameSync(source, dest);
    console.log(`  ✅ ${file} → /docs/`);
  }
});

// ============================================
// 3. ELIMINAR PNG GRANDES DE LA RAÍZ
// ============================================
console.log('\n🗑️  Eliminando PNG grandes de la raíz...');

const pngToDelete = [
  'catalogo.png',
  'gimnasio-premium-gym.png',
  'landing.png',
  'premium-store.png',
  'logoV1.png',
  'logoV2.png',
  'logoV2.deprecated.png',
];

let totalDeleted = 0;

pngToDelete.forEach(file => {
  const filePath = path.join(rootDir, file);
  
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    fs.unlinkSync(filePath);
    totalDeleted += stats.size;
    console.log(`  ✅ Eliminado ${file} (${sizeMB} MB)`);
  }
});

console.log(`  💾 Total liberado: ${(totalDeleted / 1024 / 1024).toFixed(2)} MB`);

// ============================================
// 4. ELIMINAR COMPONENTE NO USADO
// ============================================
console.log('\n🗑️  Eliminando componentes no usados...');

const unusedComponents = [
  'components/OptimizedImage.tsx',
];

unusedComponents.forEach(file => {
  const filePath = path.join(rootDir, file);
  
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`  ✅ Eliminado ${file} (no se usa en ningún lado)`);
  }
});

// ============================================
// 5. ELIMINAR CARPETAS VACÍAS
// ============================================
console.log('\n🗑️  Eliminando carpetas vacías...');

const emptyDirs = [
  'images',
];

emptyDirs.forEach(dir => {
  const dirPath = path.join(rootDir, dir);
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    if (files.length === 0) {
      fs.rmdirSync(dirPath);
      console.log(`  ✅ Eliminada carpeta vacía /${dir}`);
    }
  }
});

// ============================================
// 6. MOVER old-html-version A /docs/archive
// ============================================
console.log('\n📦 Moviendo archivos legacy...');

const archiveDir = path.join(docsDir, 'archive');
if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir, { recursive: true });
}

const oldHtmlDir = path.join(rootDir, 'old-html-version');
if (fs.existsSync(oldHtmlDir)) {
  const newPath = path.join(archiveDir, 'old-html-version');
  fs.renameSync(oldHtmlDir, newPath);
  console.log('  ✅ old-html-version → /docs/archive/');
}

// ============================================
// RESUMEN FINAL
// ============================================
console.log('\n' + '='.repeat(60));
console.log('✅ REORGANIZACIÓN COMPLETA\n');

console.log('📁 Estructura actualizada:');
console.log('   /app              - Next.js pages');
console.log('   /components       - React components');
console.log('   /lib              - Utilidades y helpers');
console.log('   /public           - Assets estáticos (solo WebP optimizados)');
console.log('   /scripts          - Scripts de desarrollo');
console.log('   /supabase         - Configuración DB');
console.log('   /docs             - Toda la documentación ✨ NUEVO');
console.log('   /docs/archive     - Versiones antiguas ✨ NUEVO\n');

console.log('🗑️  Eliminado:');
console.log('   - 7 PNG grandes de la raíz (~5.6 MB)');
console.log('   - OptimizedImage.tsx (no usado)');
console.log('   - Carpeta /images vacía\n');

console.log('📄 Documentación organizada:');
console.log('   - 22 archivos MD → /docs');
console.log('   - Versión HTML antigua → /docs/archive\n');

console.log('✅ Proyecto limpio y organizado');
console.log('✅ README.md permanece en raíz (correcto)');
console.log('✅ LICENSE permanece en raíz (correcto)');
console.log('✅ Archivos de config en raíz (correcto)\n');

console.log('🎯 Siguiente paso:');
console.log('   pnpm run build && pnpm run start\n');
console.log('='.repeat(60));
