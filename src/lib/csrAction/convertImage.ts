/**
 * @param file : image file
 * @param targetedFormat : to which format i want to convert this file
 * @returns We are going to return a promise
 */

import { imageType } from "../store/file.store";

export const convertImageToXFormat = async ({
    file,
    targetedType,
}: {
    file: File;
    targetedType: imageType;
}): Promise<File> => {
    return new Promise<File>((resolve, reject) => {
        if (!file) {
            reject(new Error("No file Provided"));
            return;
        }

        if (!targetedType) {
            reject(new Error("No targeted File type selected"));
            return
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            const img = new Image();

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.height = img.height;
                canvas.width = img.width;

                const ctx = canvas.getContext("2d");

                if (!ctx) {
                    reject(new Error("No canvas ctx !!! "));
                    return
                }

                ctx.drawImage(img, 0, 0);

                const mimeType = `image/${targetedType?.toLowerCase()}`;

                canvas.toBlob(
                    (blob) => {
                        if (!blob) {
                            return reject(
                                new Error(
                                    "Failed to convert image to desired Format"
                                )
                            );
                        }
                        const fileName = file.name.replace(/\.\w+$/, "");
                        const convertedFile = new File(
                            [blob],
                            fileName,
                            { type: mimeType, lastModified: Date.now() }
                        );

                        resolve(convertedFile);
                    },
                    mimeType,
                    1
                );
            };

            img.onerror = (err) => reject(err);

            img.src = fileReader.result as string;
        };
        fileReader.onerror = (err) => reject(err);

        fileReader.readAsDataURL(file);
    });
};
