import Link from "next/link";
import { Logo } from "./ui/logo";
import { FaGithub } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full py-3 md:px-10 px-4 border-b border-b-foreground-light/25'>
            <Logo />
            <div className='text-sm  font-semibold flex flex-row items-center justify-between gap-5'>
                <Link href={"/"}>Privacy</Link>
                <Link
                    href={"https://github.com/kakotyanimesh/ReformPix"}
                    target='_blank'>
                    <FaGithub />
                </Link>
            </div>
        </div>
    );
};
