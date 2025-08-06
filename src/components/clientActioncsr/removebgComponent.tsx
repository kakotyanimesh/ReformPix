"use client";

import { ConfigObject } from "@/lib/config/feature.config";
import { WrapperAction } from "../ui/wrapperAction";
import { useFileStore } from "@/lib/store/file.store";
import { removeBg } from "@/lib/csrAction/removebg";
import { download } from "@/lib/downloadLink";
import { toast } from "sonner";

export const RemoveBgComponent = () => {
    const { reset, imagefiles } = useFileStore();
    const downloadImage = async () => {
        // alert("asd")
        const toster = toast.loading("Hang tight!", {
            description:
                "We’re removing the background... this won’t take long.",
        });
        try {
            if (!imagefiles || imagefiles.length === 0) {
                toast.error("No image selected", {
                    description:
                        "Please upload an image to remove the background.",
                    id: toster,
                });
                return;
            }

            const bgFile = await removeBg({ file: imagefiles[0] });

            if (bgFile.success) {
                download({ blobFile: bgFile.file });
                toast.success("Background removed ✅", {
                    description: "Your image is ready and downloading now.",
                    id: toster,
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Unexpected error", {
                description:
                    "Something broke while removing the background. Try again later.",
                id: toster,
            });
        } finally {
            reset();
        }
    };
    return (
        <WrapperAction
            config={ConfigObject.removeBg}
            handleClick={downloadImage}
        />
    );
};
