import { Accordian, AccordianProps } from "./ui/accordian";

export const Policy = () => {
    return (
        <div className="md:space-y-5 space-y-12 md:mx-auto mx-10">
            <h1 className="font-semibold md:text-2xl text-md">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {FAQs.map((faq, key) => (
                    <Accordian
                        question={faq.question}
                        ans={faq.ans}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
};

const FAQs: AccordianProps[] = [
    {
        question: "Is the tool fast and reliable?",
        ans: "Yes, files are processed quickly with our optimized algorithms and reliable infrastructure.",
    },
    {
        question: "Do you store any of my files?",
        ans: "No, your files are processed locally and never stored on our servers. Privacy is our top priority.",
    },
    {
        question: "Are there any limits on usage?",
        ans: "No, you can use all tools without restrictions, watermarks, or hidden fees.",
    },
    {
        question: "Can I convert images to PDF?",
        ans: "Yes, you can combine multiple images into a single PDF document with customizable layout and quality.",
    },
    {
        question: "Can I extract images from a PDF?",
        ans: "Absolutely! You can extract pages from PDF files as high-quality images in various formats.",
    },
    {
        question: "Can I resize my images?",
        ans: "Yes, images can be resized to specific dimensions while maintaining quality and aspect ratio.",
    },
    {
        question: "Can I change image formats like PNG to JPEG?",
        ans: "Yes, you can convert between image formats such as PNG, JPEG, WEBP, and more with quality control.",
    },
];
