"use client";

import { ConfigObject } from "@/lib/config/feature.config";
import { WrapperAction } from "../ui/wrapperAction";
import { useFileStore } from "@/lib/store/file.store";
import { convertPdf } from "@/lib/csrAction/imagetoPdf";

export const ImageToPdfClientComponent = () => {
    const { imagefiles, reset } = useFileStore()

    const dowloadPdf = async () => {
        // const toaster = toas
        if(!imagefiles){
            return
        }
        try {
            const res = await convertPdf({files : imagefiles})
            

            if(!res.success){
                throw new Error(res.message)
            }
            // const fileBuffer = res.fileByte.buffer.slice(res.fileByte.byteOffset, res.fileByte.byteOffset + res.fileByte.byteLength)  
            const unit8Array = new Uint8Array(res.fileByte)
            const url = new Blob([unit8Array as BlobPart], {type : "application/pdf"})

            const a = document.createElement("a")
            a.href = URL.createObjectURL(url)

            a.download = "ReformPix-pdf.pdf"

            a.click()
            
            reset()
            
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
    return <WrapperAction config={ConfigObject.imageToPdf} handleClick={dowloadPdf} />;
};
