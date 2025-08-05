"use client"

import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { WrapperAction } from "@/components/ui/wrapperAction";
import { ConfigObject } from "@/lib/config/feature.config";

export default function ConvertImage() {
    const { heading, desc} = ConfigObject.convertImageFormat
    return (
        <div className="space-y-10">
            <FeatureHomeDiv heading={heading} desc={desc}/>
            <WrapperAction config={ConfigObject.convertImageFormat} handleClick={() => alert("we are cooking it")} />
        </div>
    )
}