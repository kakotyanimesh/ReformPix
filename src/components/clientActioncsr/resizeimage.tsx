"use client";

import { ConfigObject } from "@/lib/config/feature.config";
import { FileUploader } from "../ui/fileUploader";
import { DisplayFiles } from "../displayFiles";
import { useFileStore } from "@/lib/store/file.store";
import { DropDown } from "../ui/dropdown";
import { DropDownProps } from "./imagetoAny";
import { useState } from "react";
import React from "react";
import { Button } from "../ui/button";
import { DownloadIcon } from "../ui/icons/download";
import { resizeImage } from "@/lib/csrAction/resizeimage";
import { toast } from "sonner";
import { download } from "@/lib/downloadLink";

export const ResizeImageComponent = () => {
    const fileType = ConfigObject.resizeImages.fileType;
    const isMultiple = ConfigObject.resizeImages.isMultiple;
    const { imagefiles, reset } = useFileStore();
    const [storePercentage, setstorePercentage] = useState<number>(90);

    const storeDropDownOption = (type: string) => {
        setstorePercentage(parseInt(type.replace("%", "")));
    };

    const resizeYourImage = async () => {
        if (!imagefiles) {
            toast.error("No image file provided");
            return;
        }
        const toastId = toast.loading("Resizing image...");
        try {
            const res = await resizeImage({
                file: imagefiles[0],
                percentage: storePercentage,
            });
            if (res.success) {
                toast.success("Image resized successfully!", { id: toastId });
                download({ blobFile: res.generatedFile });
            } else {
                toast.error(res.message, { id: toastId });
            }
        } catch (error) {
            const message =
                typeof error === "object" &&
                error !== null &&
                "message" in error &&
                typeof error.message === "string"
                    ? error.message
                    : "Something went wrong";

            toast.error(message, { id: toastId });
        } finally {
            reset();
        }
    };
    return (
        <div className='flex flex-col justify-center items-center space-y-5'>
            <FileUploader
                className='w-full'
                isMultiple={isMultiple}
                filetype={fileType}
            />
            {imagefiles?.length !== 0 && (
                <div className='w-full space-y-4 justify-items-center relative'>
                    <div className='shadow-primary w-full py-5 flex flex-col justify-center space-y-2 rounded-md px-5'>
                        <h1 className='font-semibold text-sm'>
                            Resize Settings
                        </h1>
                        <DropDown
                            title='Resize Settings'
                            dropDownFunction={storeDropDownOption}
                            optionsArray={resizeOptionOne}
                            selectedType={storePercentage.toString()}
                        />
                    </div>
                    <DisplayFiles fileType={fileType} isMultiple={isMultiple} />

                    <Button
                        onClick={resizeYourImage}
                        variants={"primary"}
                        sizes={"primary"}
                        // disabled={!imageType}
                        className='flex flex-row items-center justify-center gap-2'>
                        <DownloadIcon />
                        {ConfigObject.convertImageFormat.heading}
                    </Button>
                </div>
            )}
        </div>
    );
};

const resizeOptionOne: DropDownProps[] = [
    {
        type: "90%",
        desc: "Resize image to 90% of its original dimensions.",
    },
    {
        type: "70%",
        desc: "Resize image to 70% of its original dimensions.",
    },
    {
        type: "50%",
        desc: "Resize image to half of its original dimensions.",
    },
];
