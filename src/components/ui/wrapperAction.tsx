"use client";
import { useFileStore } from "@/lib/store/file.store";
import React, { HTMLAttributes } from "react";
import { FileUploader } from "./fileUploader";
import { DisplayFiles } from "../displayFiles";
import { Button } from "./button";
import { DownloadIcon } from "./icons/download";
import { cn } from "@/lib/cn";
import type { FeatureConfigType } from "@/lib/config/feature.config";

type WrapperProps = HTMLAttributes<HTMLDivElement> & {
    config: FeatureConfigType;
    handleClick: () => void;
};

export const WrapperAction = React.forwardRef<HTMLDivElement, WrapperProps>(
    ({ className, config, handleClick, ...props }, ref) => {
        const { imagefiles, pdfFiles } = useFileStore();

        // console.log(config.desc);

        return (
            <div
                className={cn(
                    "space-y-5 flex flex-col justify-center items-center",
                    className
                )}
                ref={ref}
                {...props}>
                <FileUploader
                    className="w-full"
                    isMultiple={config.isMultiple}
                    filetype={config.fileType}
                />
                <DisplayFiles fileType={config.fileType} isMultiple={config.isMultiple}/>
                {((imagefiles?.length ?? 0) > 0 || (pdfFiles?.length ?? 0) > 0) && (
                    <Button
                        onClick={handleClick}
                        variants={"primary"}
                        sizes={"primary"}
                        className='flex flex-row items-center justify-center gap-2'>
                        <DownloadIcon />
                        {config.heading}
                    </Button>
                )}
            </div>
        );
    }
);

WrapperAction.displayName = "wrapperaction";
