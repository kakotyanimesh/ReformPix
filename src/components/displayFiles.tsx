"use client";

import { FileTypes, useFileStore } from "@/lib/store/file.store";
import Image from "next/image";
import { PdfViewer } from "./ui/pdfViewer";

export const DisplayFiles = ({ fileType }: { fileType: FileTypes }) => {
    const { files } = useFileStore();

    return (
        <div className='space-x-3 space-y-2 grid grid-cols-3'>
            {files?.map((file, key) =>
                (() => {
                    switch (fileType) {
                        case "image/*":
                            return (
                                <div key={key} className='overflow-hidden'>
                                    <Image
                                        key={key}
                                        src={URL.createObjectURL(file)}
                                        width={300}
                                        height={300}
                                        alt='image'
                                        className='size-42 hover:scale-105 transition-all ease-out'
                                    />
                                </div>
                            );
                        case "application/pdf":
                            return (
                                <PdfViewer
                                    key={key}
                                    src={URL.createObjectURL(file)}
                                />
                            );
                        default:
                            break;
                    }
                })()
            )}
        </div>
    );
};
