import { FileUploader } from "@/components/ui/fileUploader";

export default function ImageToPdf() {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <h1 className="text-3xl font-semibold">Convert Image to PDF</h1>
                <p className="text-sm text-foreground-light">
                    Upload your images and we&apos;ll combine them into a single
                    PDF document
                </p>
            </div>
            <FileUploader filetype="image"/>
        </div>
    );
}
