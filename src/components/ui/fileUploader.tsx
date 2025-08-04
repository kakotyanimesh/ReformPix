"use client";
import { motion } from "motion/react";
import { Button } from "./button";
import { useRef } from "react";
import { FileTypes, useFileStore } from "@/lib/store/file.store";

export const FileUploader = (props: { filetype: FileTypes }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { setFile, file } = useFileStore();
    const handleUploadChange = () => {
        const input = inputRef.current?.files?.[0];
        if (!input) return;

        setFile(input);
    };
    return (
        <motion.div
            className='w-full border border-dashed  border-foreground-light/30 h-62 flex flex-col justify-center items-center rounded-md space-y-3 group'
            onClick={() => inputRef.current?.click()}>
            <input
                type='file'
                accept={`${props.filetype}/*`}
                className='hidden'
                ref={inputRef}
                onChange={handleUploadChange}
            />
            <div className='bg-foreground-light/50 p-3 rounded-md group-hover:text-white group-hover:shadow-[5px_5px_2px_0px_#a0aec0] transition-all ease-out duration-200'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-4'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
                    />
                </svg>
            </div>
            <h1 className='font-semibold'>Drop Your {props.filetype} here</h1>
            <p className='text-foreground-light text-xs'>
                select files from your device
            </p>

            <Button
                // onClick={() => inputRef.current?.click()}
                variants={"outline"}
                className='group-hover:bg-foreground-light/20 z-10'>
                {
                    file ? "Change File" : "Choose File"
                } 
            </Button>

            <p className='text-xs text-foreground-light'>
                or drag and drop files here
            </p>
        </motion.div>
    );
};
