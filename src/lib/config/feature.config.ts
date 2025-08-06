import { FileTypes } from "@/lib/store/file.store";

export type FeatureConfigType = {
    id: string;
    heading: string;
    desc: string;
    isMultiple : boolean,
    fileType: FileTypes;
    // processFiles: () => void;
};
export type ComponentType = "imageToPdf" | "removeBg" | "resizeImages" | "convertImageFormat" | "addSignature" | "addText" | "watermarkPdf" | "pdfToWord"

export const ConfigObject: Record<ComponentType, FeatureConfigType> = {
    imageToPdf: {
        id: "imageToPdf",
        isMultiple: true,
        heading: "Convert Images to PDF",
        desc: "Combine multiple images into a single PDF document with customizable layout and quality.",
        fileType: "image/*",
    },
    removeBg: {
        id: "removeBg",
        isMultiple: false,
        heading: "Remove Background",
        desc: "Removed the background as high-quality images in various formats.",
        fileType: "image/*",
    },
    resizeImages: {
        isMultiple: false,
        id: "resizeImages",
        heading: "Resize Images",
        desc: "Resize images to specific dimensions while maintaining quality and aspect ratio.",
        fileType: "image/*",
    },
    convertImageFormat: {
        isMultiple: false,
        id: "convertImageFormat",
        heading: "Convert Image Format",
        desc: "Convert between different image formats like PNG, JPEG, WEBP with quality control.",
        fileType: "image/*",
    },
    addSignature: {
        isMultiple: false,
        id: "addSignature",
        heading: "Add Signature to PDF",
        desc: "Upload and place your signature on any PDF document perfect for contracts or forms.",
        fileType: "application/pdf",
    },
    addText: {
        isMultiple: false,
        id: "addText",
        heading: "Add Text to PDF",
        desc: "Insert text into any page of a PDF useful for filling forms or adding labels.",
        fileType: "application/pdf",
    },
    watermarkPdf: {
        isMultiple: false,
        id: "watermarkPdf",
        heading: "Watermark PDF",
        desc: "Add text or image watermarks to protect your documents.",
        fileType: "application/pdf",
    },
    pdfToWord: {
        isMultiple: false,
        id: "pdfToWord",
        heading: "PDF to Word",
        desc: "Convert PDF documents into editable Word (.docx) files using high-accuracy conversion.",
        fileType: "application/pdf",
    },
};
