"use client";

import { ConfigObject } from "@/lib/config/feature.config";
import { imageType, useFileStore, useImageStore } from "@/lib/store/file.store";
import { convertImageToXFormat } from "@/lib/csrAction/convertImage";
import { FileUploader } from "../ui/fileUploader";
import { DropDown } from "../ui/dropdown";
import { DisplayFiles } from "../displayFiles";
import React from "react";
import { Button } from "../ui/button";
import { DownloadIcon } from "../ui/icons/download";
import { download } from "@/lib/downloadLink";
import { toast } from "sonner";

export const ConvertImageFormatComponent = () => {
    const { imagefiles, reset } = useFileStore();
    const { imagetype, setImageType } = useImageStore();

    const dropdownFuntion = (s: string) => {
        setImageType(s as imageType);
    };

    const handleConvet = async () => {
        if (!imagefiles || imagefiles.length > 1) {
            toast.error("Only one file allowed", {
                description: "Right now, we only process one file at a time.",
            });
            return;
        }

        if (imagetype === undefined) {
            toast.error("No format selected", {
                description:
                    "Please choose a target image format before converting.",
            });
            return;
        }

        const toastId = toast.loading("Converting your image...", {
            description: `Hang tight while we convert it to .${imagetype.toLowerCase()}`,
        });
        try {
            const generatedFile = await convertImageToXFormat({
                file: imagefiles[0],
                targetedType: imagetype,
            });
            // console.log(generatedFile);
            download({ blobFile: generatedFile });

            toast.success("Conversion successful 🎉", {
                id: toastId,
                description: `Image converted to .${imagetype.toLowerCase()} and downloaded.`,
            });
        } catch (error) {
            const desc =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while converting your image.";
            toast.error("Conversion failed 😕", {
                id: toastId,
                description: desc,
            });
        } finally {
            reset();
        }
    };
    return (
        <div className='flex flex-col space-y-5 justify-center items-center'>
            <FileUploader
                className='w-full'
                isMultiple={false}
                filetype={ConfigObject.convertImageFormat.fileType}
            />
            <div className='shadow-primary w-full rounded-md py-4 space-y-2'>
                <h1 className='font-semibold text-sm'>Select Output Format</h1>
                <DropDown
                    title='Select Output Format'
                    optionsArray={FormatImageOptionTypes}
                    dropDownFunction={dropdownFuntion}
                    selectedType={imagetype}
                />
            </div>
            <DisplayFiles fileType='image/*' isMultiple={false} />
            {imagefiles?.length !== 0 && (
                <Button
                    onClick={handleConvet}
                    variants={"primary"}
                    sizes={"primary"}
                    // disabled={!imageType}
                    className='flex flex-row items-center justify-center gap-2'>
                    <DownloadIcon />
                    {ConfigObject.convertImageFormat.heading}
                </Button>
            )}
        </div>
    );
};

export type DropDownProps = {
    type: string;
    desc: string;
};

const FormatImageOptionTypes: DropDownProps[] = [
    {
        type: "PNG",
        desc: "High quality with transparency support",
    },
    {
        type: "JPEG",
        desc: "Compressed format, smaller file size",
    },
    {
        type: "WebP",
        desc: "Modern format with excellent compression",
    },
    {
        type: "BMP",
        desc: "Uncompressed bitmap format",
    },
    {
        type: "TIFF",
        desc: "High quality format for printing",
    },
];
