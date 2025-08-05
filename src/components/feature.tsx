import { IoDocumentText, IoSyncCircleSharp, IoWater } from "react-icons/io5";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { MdDocumentScanner } from "react-icons/md";

import Link from "next/link";
import { FaFilePdf, FaFileSignature } from "react-icons/fa6";
import { MdOutlineTextFields } from "react-icons/md";

export const Features = () => {
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
            {FeatureList.map((f, key) => (
                <Link
                    key={key}
                    href={f.src}
                    className='shadow-primary md:px-5 md:h-62 h-52 px-5 w-62 xl:w-auto rounded-md flex flex-col justify-center items-center text-center group gap-4 hover:shadow-secondary transition-all ease-out duration-200'>
                    {/* <Card key={key}> */}
                    <div className='bg-foreground-light/30 rounded-md p-2 group-hover:bg-foreground-light transition-all ease-linear duration-300'>
                        {f.icon}
                    </div>
                    <h1 className='font-semibold '>{f.featureName}</h1>
                    <p className='md:text-sm text-xs text-foreground-light text-wrap'>
                        {f.desc}
                    </p>
                    <h1 className='text-xs  transition-all ease-out duration-300 group-hover:text-shadow-2xs group-hover:text-shadow-foreground-light text-foreground-light group-hover:opacity-100 opacity-0'>
                        Get Started →
                    </h1>
                </Link>
            ))}
        </div>
    );
};

const FeatureList: {
    featureName: string;
    icon: React.ReactNode;
    desc: string;
    src: string;
}[] = [
    {
        featureName: "Images to PDF",
        icon: <FaFilePdf size={20} />,
        desc: "Combine multiple images into a single PDF document with customizable layout and quality.",
        src: "/images-to-pdf",
    },
    {
        featureName: "PDF to Images",
        icon: <BsFillFileEarmarkImageFill size={20} />,
        desc: "Extract pages from PDF files as high-quality images in various formats.",
        src: "/pdf-to-images",
    },
    {
        featureName: "Resize Images",
        icon: <MdDocumentScanner size={20} />,
        desc: "Resize images to specific dimensions while maintaining quality and aspect ratio.",
        src: "/resize-images",
    },
    {
        featureName: "Convert Image Format",
        icon: <IoSyncCircleSharp size={20} />,
        desc: "Convert between different image formats like PNG, JPEG, WEBP with quality control.",
        src: "/convert-image-format",
    },
    {
        featureName: "Add Signature to PDF",
        icon: <FaFileSignature size={20} />,
        desc: "Upload and place your signature on any PDF document — perfect for contracts or forms.",
        src: "/add-signature",
    },
    {
        featureName: "Add Text to PDF",
        icon: <MdOutlineTextFields size={20} />,
        desc: "Insert text into any page of a PDF — useful for filling forms or adding labels.",
        src: "/add-text",
    },
    {
        featureName: "Watermark PDF",
        icon: <IoWater size={20} />,
        desc: "Add text or image watermarks to protect your documents.",
        src: "/watermark-pdf",
    },
    {
        featureName: "PDF to Word",
        icon: <IoDocumentText size={20} />, // Or replace with another icon like AiOutlineFileWord if you prefer
        desc: "Convert PDF documents into editable Word (.docx) files using high-accuracy conversion.",
        src: "/pdf-to-word",
    },
];
