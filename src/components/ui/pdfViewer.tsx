"use client";
import { useFileStore } from "@/lib/store/file.store";
import { Button } from "./button";
import { Cancel } from "./icons/cancel";
import { FileIcon } from "./icons/file";

export const PdfViewer = ({ file, index }: { file: File, index : number }) => {
    const size = Math.floor(file.size / (1024 * 1024));
    const { removePdfFile } = useFileStore();
    return (
        <div className='w-full bg-foreground-light/30 rounded-md p-2 flex flex-row justify-between'>
            {/* <embed src={src} className='' /> */}
            <div className='flex flex-row items-center-safe gap-2'>
                <FileIcon />
                <div className='-space-y-1'>
                    <h1 className='font-semibold text-xs'>{file.name}</h1>
                    <p className='text-xs font-plexSans text-foreground-light'>
                        {size}.mb
                    </p>
                </div>
            </div>
            <Button
                variants={"secondary"}
                className='p-0 '
                onClick={() => removePdfFile(index)}>
                <Cancel />
            </Button>
        </div>
    );
};
