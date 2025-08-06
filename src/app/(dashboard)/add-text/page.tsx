"use client"
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";
import { WrapperAction } from "@/components/ui/wrapperAction";
import { ConfigObject } from "@/lib/config/feature.config";
import { toast } from "sonner";

export default function AddText() {
    const { heading, desc } = ConfigObject.addText
    const hadleFunction = () => {
        toast.info("Coming Soon: Add Text to PDF", {
            description:
                "You'll soon be able to insert custom text into any page of your uploaded PDF perfect for filling forms, adding labels, or notes. Stay tuned!",
        });
    }
    return (
        <div className="space-y-10">

            <FeatureHomeDiv heading={heading} desc={desc}/>
            <WrapperAction config={ConfigObject.addText} handleClick={hadleFunction} />
        </div>
    )
}