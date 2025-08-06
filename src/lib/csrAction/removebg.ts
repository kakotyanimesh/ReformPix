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

        const supportedTypes = ["image/png", "image/jpeg"];

        if (!supportedTypes.includes(file.type)) {
            return {
                success: false,
                message: "Unsupported Files we only support PNG or JPEG",
            };
        }

        const removed = await removeBackground(file, {
            device: "gpu",
            output: {
                quality: 1,
                format: "image/png",
            },
        });

        const fileName = file.name.replace(/\.\w+$/, "");

        const removedFileWithMetaData = new File([removed], fileName, {
            lastModified: Date.now(),
            type: "image/png",
        });

        return {
            success: true,
            file: removedFileWithMetaData,
            message: "Succesfully Removed bg",
        };

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        // console.log(error);

        return {
            success: false,
            message: "something went wrong",
        };
    }
};
