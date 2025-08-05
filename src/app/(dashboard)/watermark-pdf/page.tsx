"use client";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { WrapperAction } from "@/components/ui/wrapperAction";
import { ConfigObject } from "@/lib/config/feature.config";

export default function Watermark() {
    const { heading, desc } = ConfigObject.watermarkPdf;
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv heading={heading} desc={desc} />
            <WrapperAction config={ConfigObject.watermarkPdf} handleClick={() => alert("we are cooking it")} />
        </div>
    );
}
