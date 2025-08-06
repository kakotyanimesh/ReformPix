import { useState } from "react";
import { Button } from "./button";
import { ArrowDown } from "./icons/downArraow";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { DropDownProps } from "../clientActioncsr/imagetoAny";

type DropDownComponentProps = {
    title: string;
    optionsArray: DropDownProps[];
    selectedType?: string;
    dropDownFunction: (n: string) => void;
};

export const DropDown = ({
    title,
    optionsArray,
    selectedType,
    dropDownFunction,
}: DropDownComponentProps) => {
    const [isClickedDropDown, setIsClickedDropDown] = useState<boolean>(false);

    return (
            <div className='relative flex justify-center'>
                <Button
                    onClick={() => setIsClickedDropDown(!isClickedDropDown)}
                    variants={"outline"}
                    className='md:w-96 text-xs w-full text-foreground-light font-normal flex flex-row items-center justify-between'>
                    {selectedType
                        ? `${selectedType}`
                        : title}
                    <ArrowDown />
                </Button>
                <AnimatePresence>
                    {isClickedDropDown && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{
                                duration: 0.18,
                                ease: [0.25, 0.8, 0.25, 1],
                            }}
                            className='bg-white absolute md:w-96 w-full p-1 top-9 z-20 space-y-1 shadow-primary rounded-md'>
                            {optionsArray.map((f, key) => (
                                <Button
                                    key={key}
                                    onClick={() => {
                                        dropDownFunction(f.type);
                                        setIsClickedDropDown(
                                            !isClickedDropDown
                                        );
                                    }}
                                    variants={"transparent"}
                                    className={cn(
                                        "w-full py-1 text-left px-6",
                                        selectedType === f.type &&
                                            "bg-foreground-light/20"
                                    )}>
                                    <h1 className='text-xs font-semibold text-wrap'>
                                        {f.type}
                                    </h1>
                                    <p className='text-xs text-foreground-light text-wrap'>
                                        {f.desc}
                                    </p>
                                </Button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
    );
};
