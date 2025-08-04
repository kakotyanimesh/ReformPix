"use client"

import { ImageToPdfClient } from "@/components/imagetopdf";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";

export default function ImageToPdf() {
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv
                heading='Convert Images to PDF'
                desc="Upload your images and we'll combine them into a single PDF document"
            />
            <ImageToPdfClient />
        </div>
    );
}
