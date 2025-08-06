"use client";

import { ConfigObject } from "@/lib/config/feature.config";
import { WrapperAction } from "../ui/wrapperAction";
import { useFileStore } from "@/lib/store/file.store";
import { convertPdf } from "@/lib/csrAction/imagetoPdf";
import { toast } from "sonner";

export const ImageToPdfClientComponent = () => {
    const { imagefiles, reset } = useFileStore();

    const dowloadPdf = async () => {
        // const toaster = toas
        if (!imagefiles) {
            toast("No images found", {
                description:
                    "Please upload some images before converting to PDF.",
            });
            return;
        }
        try {
            const res = await convertPdf({ files: imagefiles });

            if (!res.success) {
                throw new Error(res.message);
            }
            // const fileBuffer = res.fileByte.buffer.slice(res.fileByte.byteOffset, res.fileByte.byteOffset + res.fileByte.byteLength)
            const unit8Array = new Uint8Array(res.fileByte);
            const blobFile = new Blob([unit8Array as BlobPart], {
                type: "application/pdf",
            });

            const a = document.createElement("a");
            a.href = URL.createObjectURL(blobFile);

            a.download = "ReformPix-pdf";

            a.click();

            toast.success("PDF created successfully 📄", {
                description:
                    "Your images have been converted and downloaded as a PDF.",
            });

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            // console.log(error);
            toast.error("Something went wrong", {
                description:
                    "We couldn't create the PDF. Please try again in a moment.",
            });
        } finally {
            reset();
        }
    };

    return (
        <WrapperAction
            config={ConfigObject.imageToPdf}
            handleClick={dowloadPdf}
        />
    );
};
