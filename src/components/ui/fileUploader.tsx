"use client";
import { motion } from "motion/react";
import { Button } from "./button";
import { useRef } from "react";
import { FileTypes, useFileStore } from "@/lib/store/file.store";
import { Upload } from "./icons/upload";

const fileTypeLable: Record<FileTypes, string> = {
    "application/pdf": "PDF",
    "image/*": "Image",
};

export const FileUploader = (props: { filetype: FileTypes, isMultiple : boolean }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { setImageFiles, setpdfFiles, pdfFiles, imagefiles } = useFileStore();

    const handleUploadChange = () => {
        const inputFiles = inputRef.current?.files;
        if (!inputFiles) return;

        const filesArray = Array.from(inputFiles);
        if(props.filetype === "application/pdf"){
            setpdfFiles(filesArray)
        } else if(props.filetype === "image/*"){
            setImageFiles(filesArray)
        } else {
            console.log("nothing we can't do here");
            
        }
    };
    return (
        <motion.div
            className='w-full border border-dashed  border-foreground-light h-62 flex flex-col justify-center items-center rounded-md space-y-3 group'
            onClick={() => inputRef.current?.click()}>
            <input
                type='file'
                accept={`${props.filetype}`}
                className='hidden'
                ref={inputRef}
                multiple={props.isMultiple}
                onChange={handleUploadChange}
            />
            <div className='bg-foreground-light/50 p-3 rounded-md group-hover:text-white group-hover:shadow-[5px_5px_2px_0px_#a0aec0] transition-all ease-out duration-200'>
                <Upload/>
            </div>
            <h1 className='font-semibold'>
                Drop Your {fileTypeLable[props.filetype]} here
            </h1>
            <p className='text-foreground-light text-xs'>
                select files from your device
            </p>

            <Button
                variants={"outline"}
                className='group-hover:bg-foreground-light/20 z-10'>
                {(imagefiles?.length !== 0 || !pdfFiles?.length) ? "Change Files" : "Choose Files"}
            </Button>

            <p className='text-xs text-foreground-light'>
                or drag and drop files here
            </p>
        </motion.div>
    );
};
