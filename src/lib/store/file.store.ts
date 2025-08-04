import { create } from "zustand";

export type FileTypes = "image" | "pdf";

type FileStoreType = {
    file: File | null;
    setFile: (f: File) => void;
    reset: () => void;
};

export const useFileStore = create<FileStoreType>((set) => ({
    file: null,
    setFile: (f) => set({ file: f }),
    reset: () => set({ file: null }),
}));
