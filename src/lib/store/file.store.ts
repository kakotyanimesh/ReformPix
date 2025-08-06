import { create } from "zustand";

export type FileTypes = "image/*" | "application/pdf";

type FileStoreType = {
    imagefiles: File[] | null;
    pdfFiles: File[] | null;
    setImageFiles: (f: File[]) => void;
    setpdfFiles: (f: File[]) => void;
    removeImageFile: (index: number) => void;
    removePdfFile: (index: number) => void;
    reset: () => void;
};

// const initial
export const useFileStore = create<FileStoreType>((set, get) => ({
    imagefiles: [],
    pdfFiles: [],
    setImageFiles: (f) => set({ imagefiles: f }),
    setpdfFiles: (f) => set({ pdfFiles: f }),
    reset: () => set({ imagefiles: [], pdfFiles: [] }),
    removeImageFile: (index) =>
        set({
            imagefiles: get().imagefiles?.filter((_, i) => i !== index),
        }),
    removePdfFile : (index) => set({pdfFiles : get().pdfFiles?.filter((_,i) => i !== index)})
}));

export type imageType = "PNG" | "JPEG" | "WebP" | "BMP" | "TIFF"  | undefined
 

type imageStore = {
    imagetype : imageType
    setImageType : (n : imageType) => void
}


export const useImageStore = create<imageStore>((set) => ({
    imagetype : undefined,
    setImageType(n) {
        set({imagetype : n})
    },
}))