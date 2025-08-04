import { create } from "zustand";

export type FileTypes = "image/*" | "application/pdf";

type FileStoreType = {
    files: File[] | null;
    setFiles: (f: File[]) => void;
    removeFile : (index : number) => void
    reset: () => void;
};

export const useFileStore = create<FileStoreType>((set, get) => ({
    files: [],
    setFiles: (f) => set({ files: f }),
    reset: () => set({ files: null }),
    removeFile : (index) => set({
        files : get().files?.filter((_, i) => i !== index)
    })
}));
