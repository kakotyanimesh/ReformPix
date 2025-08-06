"use client"

import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { WrapperAction } from "@/components/ui/wrapperAction";
import { ConfigObject } from "@/lib/config/feature.config";
import { toast } from "sonner";

export default function PdfToWord() {
    const { heading, desc } = ConfigObject.pdfToWord
    const handleClick = () => {
        toast.info("PDF to Word Conversion Coming Soon", {
            description:
                "Easily convert PDF documents into editable Word (.docx) files with high-accuracy formatting. This feature is currently under development and will be available shortly.",
        })
    }
    return (
        <div className="space-y-10">

            <FeatureHomeDiv heading={heading} desc={desc}/>
            <WrapperAction config={ConfigObject.pdfToWord} handleClick={handleClick} />
        </div>
    )
}