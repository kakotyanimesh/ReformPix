"use client";

import { ConfigObject } from "@/lib/config/feature.config";
import { WrapperAction } from "./ui/wrapperAction";

export const ImageToPdfClient = () => {
    return <WrapperAction config={ConfigObject.imageToPdf} />;
};
