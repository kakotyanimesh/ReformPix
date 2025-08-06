
import { ConvertImageFormatComponent } from "@/components/clientActioncsr/imagetoAny";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { ConfigObject } from "@/lib/config/feature.config";

export default function ConvertImage() {
    const { heading, desc} = ConfigObject.convertImageFormat
    return (
        <div className="space-y-10">
            <FeatureHomeDiv heading={heading} desc={desc}/>
            <ConvertImageFormatComponent/>
        </div>
    )
}