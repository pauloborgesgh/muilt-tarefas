/* Local module declarations to satisfy TypeScript for third-party libs without types */
declare module 'jspdf' {
  const jsPDF: any;
  export default jsPDF;
}

declare module 'cropperjs' {
  const Cropper: any;
  export default Cropper;
}

// allow importing CSS from node_modules in TS files (used for cropper.css import)
declare module '*.css';
