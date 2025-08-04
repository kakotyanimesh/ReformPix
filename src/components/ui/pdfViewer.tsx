

export const PdfViewer = ({ src }: { src: string }) => {
    return <iframe src={src} className='h-full scrollbar-hide ' />;
};

