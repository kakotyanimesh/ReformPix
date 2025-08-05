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
    reset: () => set({ imagefiles: null, pdfFiles: null }),
    removeImageFile: (index) =>
        set({
            imagefiles: get().imagefiles?.filter((_, i) => i !== index),
        }),
    removePdfFile : (index) => set({pdfFiles : get().pdfFiles?.filter((_,i) => i !== index)})
}));
