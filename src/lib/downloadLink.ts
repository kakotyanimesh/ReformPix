export const download = ({ blobFile }: { blobFile: File }) => {
    const url = URL.createObjectURL(blobFile);

    try {
        const a = document.createElement("a");
        a.href = url;
        a.download = blobFile.name;
        a.click();
    } catch (error) {
        console.log(error);
    } finally {
        URL.revokeObjectURL(url);
    }
};
