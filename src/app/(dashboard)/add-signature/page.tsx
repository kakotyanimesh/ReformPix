import { AddSignatureComponent } from "@/components/clientActioncsr/signaturepdf";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { ConfigObject } from "@/lib/config/feature.config";

export default function AddSignature() {
    const { heading, desc } = ConfigObject.addSignature
    return (
        <div className="space-y-10">

            <FeatureHomeDiv heading={heading} desc={desc}/>
            <AddSignatureComponent/>
        </div>
    )
}