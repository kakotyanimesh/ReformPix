
import { ImageToPdfClientComponent } from "@/components/clientActioncsr/imagetopdf";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { ConfigObject } from "@/lib/config/feature.config";

export default function ImageToPdfPage() {
    const { heading, desc } = ConfigObject.imageToPdf
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv
                heading={heading}
                desc={desc}
            />
            <ImageToPdfClientComponent />
        </div>
    );
}
