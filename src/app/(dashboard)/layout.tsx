import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { MdKeyboardBackspace } from "react-icons/md";


export default function DashboardLayout({children}:{children : ReactNode}) {
    return(
        <div className=" lg:max-w-3xl md:max-w-2xl md:mx-auto mt-5 space-y-20 mb-32 ">
            <Button asChild={true} variants={"secondary"} className="">
                <Link href={"/"} className="flex flex-row items-center justify-center gap-2">
                    <MdKeyboardBackspace/>
                    Back to Tools
                </Link>
            </Button>
            <div className="text-center justify-self-center mx-5 md:mx-auto">{children}</div>
        </div>
    )
}