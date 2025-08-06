type ReturnType =
    | { success: false; message: string }
    | { success: true; generatedFile: File };

export const resizeImage = async ({
    file,
    percentage,
}: {
    file: File;
    percentage: number;
}): Promise<ReturnType> => {
    return new Promise((resolve, reject: (reason: ReturnType) => void) => {
        if (!file) {
            reject({ success: false, message: "No file provided" });
            return;
        }

        if (!percentage) {
            reject({ success: false, message: "No percentage provided" });
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            const img = new Image();

            img.onload = () => {
                const canvas = document.createElement("canvas");

                const scale = percentage / 100;

                canvas.width = img.width * scale;
                canvas.height = img.height * scale;

                const ctx = canvas.getContext("2d");

                if (!ctx) {
                    reject({
                        success: false,
                        message:
                            "Unable to convert Try again, your browser sucks",
                    });
                }

                ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

                const mimeType = file.type;

                canvas.toBlob(
                    (Blob) => {
                        if (!Blob) {
                            return reject({
                                success: false,
                                message:
                                    "Unable to generat Blob / Binary Large object",
                            });
                        }

                        const generatedFile = new File([Blob], file.name, {
                            type: mimeType,
                            lastModified: Date.now(),
                        });

                        resolve({success : true, generatedFile})
                    },
                    mimeType,
                    1
                );
            };

            img.onerror = (err) =>
                reject({
                    success: false,
                    message:
                        err instanceof Error
                            ? err.message
                            : "something went worng",
                });
            img.src = fileReader.result as string;
        };

        fileReader.onerror = (err) =>
            reject({
                success: false,
                message:
                    err instanceof Error ? err.message : "something went wrong",
            });
        fileReader.readAsDataURL(file);
    });
};
