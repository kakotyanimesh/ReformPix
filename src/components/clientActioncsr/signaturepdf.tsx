"use client";

import { FileUploader } from "../ui/fileUploader";
import { DisplayFiles } from "../displayFiles";
import { useFileStore } from "@/lib/store/file.store";
import { Button } from "../ui/button";
import { ConfigObject } from "@/lib/config/feature.config";
import { PiPencil } from "react-icons/pi";
import { toast } from "sonner";

export const AddSignatureComponent = () => {
    const { heading } = ConfigObject.addSignature;
    const { imagefiles, pdfFiles, reset } = useFileStore();
    const addSignatureToPdf = async () => {
        if (!imagefiles) {
            return;
        }

        toast.info("We're still cooking the digital signature!", {
            description:
                "Apologies for the delay — our team is perfecting the recipe. Thanks for your patience, it’ll be ready soon! 😊",
        });
        try {
            // const removedBgImage = await removeBg({ file: imagefiles[0] });
            // if(!removedBgImage.success){
            //     throw new Error(removedBgImage.message || "something weont wrong")
            // }
            // download({blobFile : removedBgImage.file})
        } catch (error) {
            const err =
                error instanceof Error ? error.message : "seomthing went worng";

            return err;
        } finally {
            reset();
        }
    };

    return (
        <div className=''>
            <section className='flex md:flex-row flex-col text-left gap-5 md:w-2xl w-auto'>
                <div className='space-y-2 flex-1'>
                    <h1 className='font-semibold'>Upload Pdf Document</h1>
                    <FileUploader
                        className='w-full'
                        isMultiple={false}
                        filetype={"application/pdf"}
                    />
                    <DisplayFiles
                        isMultiple={false}
                        fileType={"application/pdf"}
                        className='w-full '
                    />
                </div>
                <div className='space-y-2 flex-1'>
                    <h1 className='font-semibold'>Upload Your Signature</h1>
                    <FileUploader
                        isMultiple={false}
                        filetype={"image/*"}
                        className='w-full'
                    />
                    <DisplayFiles
                        fileType={"image/*"}
                        isMultiple={false}
                        className='w-full flex justify-center items-center '
                    />
                </div>
            </section>
            <div className='w-full mt-10 flex justify-center items-center'>
                {(imagefiles?.length ?? 0) > 0 &&
                    (pdfFiles?.length ?? 0) > 0 && (
                        <Button
                            onClick={addSignatureToPdf}
                            variants={"primary"}
                            sizes={"primary"}
                            className='flex flex-row items-center justify-center gap-2'>
                            <PiPencil />
                            {heading}
                        </Button>
                    )}
            </div>
        </div>
    );
};
