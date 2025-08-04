"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export interface AccordianProps {
    question: string;
    ans: string;
}

export const Accordian = (props: AccordianProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            onClick={() => setIsHovered(!isHovered)}
            className='text-left border-b border-b-foreground-light/40 pb-4 md:w-96  cursor-pointer'>
            <div className='flex flex-row justify-between items-center group'>
                <h2 className='font-semibold text-sm group-hover:text-shadow-foreground-light group-hover:text-shadow-2xs transition-colors ease-out'>
                    {props.question}
                </h2>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-4'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d={
                            isHovered
                                ? "m19.5 8.25-7.5 7.5-7.5-7.5"
                                : "m4.5 15.75 7.5-7.5 7.5 7.5"
                        }
                    />
                </svg>
            </div>
            <AnimatePresence>
                {isHovered && (
                    <motion.p
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        className=' text-sm'
                        variants={{
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: "auto" },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}>
                        {props.ans}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};
