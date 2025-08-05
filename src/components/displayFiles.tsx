"use client";

import { FileTypes, useFileStore } from "@/lib/store/file.store";
import Image from "next/image";
import { PdfViewer } from "./ui/pdfViewer";
import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type DisplayFilesProps = HTMLAttributes<HTMLDivElement> & {
    fileType: FileTypes;
};

export const DisplayFiles = React.forwardRef<HTMLDivElement, DisplayFilesProps>(
    ({ fileType, className, ...props }, ref) => {
        const { imagefiles, pdfFiles } = useFileStore();

        return (
            <>
                {(() => {
                    switch (fileType) {
                        case "image/*":
                            return (
                                <div
                                    className={cn(
                                        "space-x-1 space-y-2 grid md:grid-cols-3 grid-cols-1",
                                        className
                                    )}
                                    {...props}
                                    ref={ref}>
                                    {imagefiles?.map((img, key) => (
                                        <div
                                            key={key}
                                            className='overflow-hidden'>
                                            <Image
                                                key={key}
                                                draggable={false}
                                                src={URL.createObjectURL(img)}
                                                width={300}
                                                height={300}
                                                alt='image'
                                                className='size-42'
                                            />
                                        </div>
                                    ))}
                                </div>
                            );

                        case "application/pdf":
                            return (
                                <div
                                    className={cn(
                                        "space-x-3 space-y-2 grid md:grid-cols-3 grid-cols-1",
                                        className
                                    )}
                                    {...props}
                                    ref={ref}>
                                    {pdfFiles?.map((pdf, key) => (
                                        <PdfViewer
                                            key={key}
                                            src={URL.createObjectURL(pdf)}
                                        />
                                    ))}
                                </div>
                            );
                        default:
                            break;
                    }
                })()}
            </>
        );
    }
);

DisplayFiles.displayName = "displaydiv";
