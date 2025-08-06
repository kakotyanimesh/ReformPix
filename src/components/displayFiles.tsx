"use client";

import { FileTypes, useFileStore } from "@/lib/store/file.store";
import { PdfViewer } from "./ui/pdfViewer";
import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { ImageViewer } from "./ui/imagevViewer";

type DisplayFilesProps = HTMLAttributes<HTMLDivElement> & {
    fileType: FileTypes;
    isMultiple : boolean
};

export const DisplayFiles = React.forwardRef<HTMLDivElement, DisplayFilesProps>(
    ({ fileType, className, isMultiple, ...props }, ref) => {
        const { imagefiles, pdfFiles } = useFileStore();

        return (
            <>
                {(() => {
                    switch (fileType) {
                        case "image/*":
                            return (
                                <div
                                    className={cn(
                                        "space-x-1 space-y-2 grid ",
                                        isMultiple ? "md:grid-cols-3 grid-cols-2" : "grid-cols-1",
                                        className
                                    )}
                                    {...props}
                                    ref={ref}>
                                    {imagefiles?.map((img, key) => (
                                        <ImageViewer file={img} index={key} key={key}/>
                                    ))}
                                </div>
                            );

                        case "application/pdf":
                            return (
                                <div
                                    className={cn(
                                        "w-full ",
                                        className
                                    )}
                                    {...props}
                                    ref={ref}>
                                    {pdfFiles?.map((pdf, key) => (
                                        <PdfViewer
                                            index={key}
                                            key={key}
                                            file={pdf}
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
