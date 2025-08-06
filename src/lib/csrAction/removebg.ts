/**
 * using imagely package
 * for remove bg
 */

import { removeBackground } from "@imgly/background-removal";

type ReturnType =
    | { success: false; message: string }
    | { file: File; success: true; message: string };

export const removeBg = async ({
    file,
}: {
    file: File;
}): Promise<ReturnType> => {
    try {
        if (!file) {
            return {
                success: false,
                message: "No file Provided",
            };
        }
        console.log("anime");

        const supportedTypes = ["image/png", "image/jpeg"];

        if (!supportedTypes.includes(file.type)) {
            return {
                success: false,
                message: "Unsupported Files we only support PNG or JPEG",
            };
        }

        const removed = await removeBackground(file, {
            device: "cpu",
            output: {
                quality: 0.7,
                format: "image/png",
            },
        });

        const originalName = file.name.replace(/\.\w+$/, "");
        const newFileName = `${originalName}_no_bg.png`;

        const removedFileWithMetaData = new File([removed], newFileName, {
            type: "image/png",
            lastModified: Date.now(),
        });

        return {
            success: true,
            file: removedFileWithMetaData,
            message: "Succesfully Removed bg",
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        // console.error("Background removal error:", error);

        if (error instanceof Error) {
            return {
                success: false,
                message: `Error: ${error.message}`,
            };
        }

        return {
            success: false,
            message: "An unexpected error occurred during background removal",
        };
    }
};
