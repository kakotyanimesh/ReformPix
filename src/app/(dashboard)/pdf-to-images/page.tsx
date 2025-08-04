"use client";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { WrapperAction } from "@/components/ui/wrapperAction";
import { ConfigObject } from "@/lib/config/feature.config";

export default function PdfToImage() {
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv
                heading='Convert PDF to Images'
                desc="Upload a PDF and we'll extract each page as a separate image"
            />
            <WrapperAction config={ConfigObject.pdfToImages} />
        </div>
    );
}
