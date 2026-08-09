// Single source of truth for per-route <head> metadata.
//
// Consumed twice: at runtime by PageMeta, and at build time by
// scripts/build-shells.js. The build script runs in plain Node with no
// transpile step, so this file has to stay dependency-free ESM that both
// Vite and bare `node` can load.
const routeMeta = {
  '/': {
    title: 'PhenoKinetics - Revolutionary MASH Diagnostic Testing',
    description:
      'PhenoKinetics pioneers non-invasive MASH diagnostic testing through innovative EZ-MASH technology, transforming liver disease diagnosis without painful biopsies.',
  },
  '/science': {
    title: 'EZ-MASH Technology - The Science Behind MASH Diagnosis | PhenoKinetics',
    description:
      "Discover how PhenoKinetics' EZ-MASH test uses an exogenous probe to diagnose MASH non-invasively. Learn about our innovative transporter-based diagnostic approach.",
  },
  '/team': {
    title: 'Our Team - Meet the Experts Behind PhenoKinetics',
    description:
      'Meet the PhenoKinetics leadership team developing revolutionary MASH diagnostic technology. Led by Dr. Nathan Cherrington and experienced executives in biotechnology.',
  },
  '/contact': {
    title: 'Contact PhenoKinetics - Get in Touch for MASH Diagnostic Solutions',
    description:
      'Contact PhenoKinetics to learn about our EZ-MASH diagnostic liver function test. Located in Tucson, Arizona. Email info@phenokinetics.com or call (385) 262-4032.',
  },
};

export default routeMeta;
