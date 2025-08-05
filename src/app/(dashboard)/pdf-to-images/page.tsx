import { PdfToImageComponent } from "@/components/clientActioncsr/pdftoImage";
import { FeatureHomeDiv } from "@/components/ui/featureHomediv";


export default function PdfToImage() {
    return (
        <div className='space-y-10'>
            <FeatureHomeDiv
                heading='Convert PDF to Images'
                desc="Upload a PDF and we'll extract each page as a separate image"
            />
            <PdfToImageComponent/>
        </div>
    );
}
