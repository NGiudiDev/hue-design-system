import fs from "node:fs";
import path from "node:path";

// Ruta raiz de los componentes
const componentsRoot = path.resolve(process.cwd(), "src/components");

// Archivos requeridos por defecto para cada componente
const getDefaultRequiredFiles = (name) => {
  return [
    `${name}.jsx`,
    `${name}.styles.js`,
    `${name}.stories.jsx`,
    `${name}.docs.jsx`,
  ];
};

// Excepciones heredadas que no requieren todos los archivos
const requiredFilesOverrides = {
  Input: ["Input.jsx", "Input.stories.jsx", "Input.docs.jsx"],
  ThemeProvider: ["ThemeProvider.jsx", "ThemeProvider.stories.jsx", "ThemeProvider.docs.jsx"],
};

const getRequiredFiles = (name) => {
  return requiredFilesOverrides[name] || getDefaultRequiredFiles(name);
};

const reportError = (message) => {
  console.error(message);
  process.exitCode = 1;
};

if (!fs.existsSync(componentsRoot)) {
  reportError(`No se encontro la carpeta de componentes: ${componentsRoot}`);
  process.exit();
}

const componentDirs = fs.readdirSync(componentsRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();

if (componentDirs.length === 0) {
  console.log("No hay componentes para validar.");
  process.exit();
}

let hasErrors = false;

for (const componentName of componentDirs) {
  const componentPath = path.join(componentsRoot, componentName);
  const requiredFiles = getRequiredFiles(componentName);
  const missingFiles = requiredFiles.filter((fileName) => !fs.existsSync(path.join(componentPath, fileName)));

  if (missingFiles.length > 0) {
    hasErrors = true;
    reportError(`\n[${componentName}] Faltan archivos obligatorios:`);

    for (const fileName of missingFiles) {
      reportError(`- src/components/${componentName}/${fileName}`);
    }
  }
}

if (!hasErrors) {
  console.log(`Validacion OK. ${componentDirs.length} componentes cumplen estructura minima.`);
}