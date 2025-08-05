"use client";

import { FileUploader } from "../ui/fileUploader";
import { DisplayFiles } from "../displayFiles";
import { useFileStore } from "@/lib/store/file.store";
import { Button } from "../ui/button";
import { ConfigObject } from "@/lib/config/feature.config";
import { PiPencil } from "react-icons/pi";

export const AddSignatureComponent = () => {
    const { heading } = ConfigObject.addSignature;
    const { imagefiles, pdfFiles } = useFileStore();
    const addSignatureToPdf = () => {alert("we are still cooking it")};

    return (
        <div className='md:-mx-10'>
            <section className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-3 text-left'>
                <div className='space-y-3'>
                    <h1 className='font-semibold'>Upload Pdf Document</h1>
                    <FileUploader
                        isMultiple={false}
                        filetype={"application/pdf"}
                    />
                    <DisplayFiles
                        fileType={"application/pdf"}
                        className='w-full'
                    />
                </div>
                <div className='space-y-3'>
                    <h1 className='font-semibold'>Upload Your Signature</h1>
                    <FileUploader isMultiple={false} filetype={"image/*"} />
                    <DisplayFiles
                        fileType={"image/*"}
                        className='w-full flex justify-center items-center '
                    />
                </div>
            </section>
            <div className="w-full mt-10 flex justify-center items-center">
                {imagefiles?.length !== 0 && pdfFiles?.length !== 0 && (
                    <Button className='flex flex-row items-center gap-2' onClick={addSignatureToPdf}>
                        <PiPencil />
                        {heading}
                    </Button>
                )}
            </div>
        </div>
    );
};
