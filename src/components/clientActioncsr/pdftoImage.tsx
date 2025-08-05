"use client"

import { ConfigObject } from "@/lib/config/feature.config"
import { WrapperAction } from "../ui/wrapperAction"
import { useFileStore } from "@/lib/store/file.store"

export const PdfToImageComponent = () => {
    const { reset } = useFileStore()
    const downloadImage = () => {
        alert("We are cooking this in dev")
        reset()
    }
    return (
        <WrapperAction config={ConfigObject.pdfToImages} handleClick={downloadImage}/>

    )
}