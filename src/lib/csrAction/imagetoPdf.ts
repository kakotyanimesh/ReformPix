import { PDFDocument } from "pdf-lib";

export type ConvertPdfResult =
    | { message: string; success: false }
    | { success: true; fileByte: Uint8Array; message: string };

export const convertPdf = async ({
    files,
}: {
    files: File[];
}): Promise<ConvertPdfResult> => {
    if (!files || files.length === 0) {
        return {
            message: "No files Provided",
            success: false,
        };
    }

    // first create a blanck pdf file
    const blanckPdf = await PDFDocument.create();

    for (const file of files) {
        // .png/.jpeg to some bytes or binary data
        const convertedByteImage = await file.arrayBuffer();

        // console.log(convertedByteImage, "bytes");

        let img;
        // we are creating what to draw on the pdf

        if (file.type === "image/jpg" || file.type === "image/jpeg") {
            img = await blanckPdf.embedJpg(convertedByteImage);
            // console.log("jpg" , img);
        } else if (file.type === "image/png") {
            img = await blanckPdf.embedPng(convertedByteImage);
            // console.log("png", img);
        } else {
            console.warn(`The file ${file.name} is unsupported`);
            continue;
        }

        // .scale(1) no scale up
        const { width, height } = img.scale(1);

        // we are adding pages in the pdf
        const page = blanckPdf.addPage([width, height]);
        // console.log("page", page);

        page.drawImage(img, {
            x: 10,
            y: 10,
            height: height,
            width: width,
        });
        // draw pdf
    }

    // saving pdf
    const arryBytes = await blanckPdf.save();
    // the arrayBytes is unit8arrya which we will convert to pdf with blob 

    return {
        success: true,
        fileByte: arryBytes,
        message: "Succesfully Converted to pdf",
    };
};
