"use client";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { WrapperAction } from "@/components/ui/wrapperAction";
import { ConfigObject } from "@/lib/config/feature.config";
import { toast } from "sonner";

export default function Watermark() {
    const { heading, desc } = ConfigObject.watermarkPdf;
    const handleClick = () => {
        toast.info("Coming Soon: Watermark PDF", {
            description:
                "This tool will let you add custom text or image watermarks to your PDF files — perfect for branding or protecting your documents from unauthorized use. Feature is under development!",
        });
    };
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv heading={heading} desc={desc} />
            <WrapperAction
                config={ConfigObject.watermarkPdf}
                handleClick={handleClick}
            />
        </div>
    );
}
