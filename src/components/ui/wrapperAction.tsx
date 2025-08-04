"use client"
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
};

export const WrapperAction = React.forwardRef<HTMLDivElement, WrapperProps>(
    ({ className, config, ...props }, ref) => {
        const { files } = useFileStore();

        // console.log(config.desc);
        

        return (
            <div
                className={cn(
                    "space-y-10 flex flex-col justify-center items-center",
                    className
                )}
                ref={ref}
                {...props}>
                <FileUploader isMultiple={config.isMultiple} filetype={config.fileType} />
                <DisplayFiles fileType={config.fileType} />
                {files?.length !== 0 && (
                    <Button
                        onClick={config.processFiles}
                        variants={"primary"}
                        sizes={"primary"}
                        className='flex flex-row items-center justify-center gap-2 w-42'>
                        <DownloadIcon />
                        {config.heading}
                    </Button>
                )}
            </div>
        );
    }
);

WrapperAction.displayName = "wrapperaction";
