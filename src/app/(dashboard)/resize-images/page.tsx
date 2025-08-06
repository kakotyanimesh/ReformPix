import { ResizeImageComponent } from "@/components/clientActioncsr/resizeimage";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { ConfigObject } from "@/lib/config/feature.config";

export default function ResizeImagePage() {
    const { heading, desc } = ConfigObject.resizeImages;
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv heading={heading} desc={desc} />
            <ResizeImageComponent />
        </div>
    );
}
