"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { Button } from "./button";
import React, { useRef } from "react";
import { FileTypes, useFileStore } from "@/lib/store/file.store";
import { Upload } from "./icons/upload";
import { cn } from "@/lib/cn";

const fileTypeLable: Record<FileTypes, string> = {
    "application/pdf": "PDF",
    "image/*": "Image",
};

type FileUploderProps = HTMLMotionProps<"div"> & {filetype : FileTypes, isMultiple : boolean}

export const FileUploader = React.forwardRef<HTMLDivElement, FileUploderProps>(({ className, filetype, isMultiple, ...props}, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { setImageFiles, setpdfFiles, pdfFiles, imagefiles } = useFileStore();

    const handleUploadChange = () => {
        const inputFiles = inputRef.current?.files;
        if (!inputFiles) return;

        const filesArray = Array.from(inputFiles);
        if (filetype === "application/pdf") {
            setpdfFiles(filesArray)
        } else if (filetype === "image/*") {
            setImageFiles(filesArray)
        } else {
            console.log("nothing we can't do here");

        }
    };
    return (
        <motion.div
            className={cn("w-fit border border-dashed  border-foreground-light h-62 flex flex-col justify-center items-center rounded-md space-y-3 group", className)}
            {...props}
            ref={ref}
            onClick={() => inputRef.current?.click()}>
            <input
                type='file'
                accept={`${filetype}`}
                className='hidden'
                ref={inputRef}
                multiple={isMultiple}
                onChange={handleUploadChange}
            />
            <div className='bg-foreground-light/50 p-3 rounded-md group-hover:text-white group-hover:shadow-[5px_5px_2px_0px_#a0aec0] transition-all ease-out duration-200'>
                <Upload />
            </div>
            <h1 className='font-semibold'>
                Drop Your {fileTypeLable[filetype]} here
            </h1>
            <p className='text-foreground-light text-xs'>
                select files from your device
            </p>

            <Button
                variants={"outline"}
                className='group-hover:bg-foreground-light/20 z-10'>
                {(imagefiles?.length !== 0 || !pdfFiles?.length) ? "Choose Files" : "Change Files" }
            </Button>

            <p className='text-xs text-foreground-light'>
                or drag and drop files here
            </p>
        </motion.div>
    );
})


FileUploader.displayName = "fileUploder"
