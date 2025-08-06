import { Features } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Policy } from "@/components/policy";

export default function Home() {
    return (
        <div className='text-center max-w-5xl mx-auto space-y-10 justify-items-center-safe '>
            {/* <div className='flex flex-col justify-center items-center text-center mt-32 space-y-20  max-w-5xl h-full w-full'> */}
            <div className='space-y-7 md:my-28 my-20 md:px-auto px-5'>
                <h1 className='font-sans font-semibold md:text-4xl text-xl'>
                    Simple tools for your <br /> images and documents
                </h1>
                <p className=' text-foreground-light text-xs md:text-sm '>
                    Convert, resize, and transform your files with
                    professional-grade tools. Fast, secure, <br /> and
                    completely free to use.
                </p>
            </div>
            <Features />
            <Policy />
            <Footer />

            {/* </div> */}
        </div>
    );
}
