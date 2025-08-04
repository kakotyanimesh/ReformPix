import Link from "next/link";
import { GoHeartFill } from "react-icons/go";

export const Footer = () => {
    return (
        <div className='my-5'>
            <Link href={"https://x.com/_animeshkakoty"} target="_blank" className="flex flex-row items-center gap-1  text-sm cursor-pointer">
                Made with{" "}
                    <GoHeartFill className="fill-red-600" size={13} />
                Animesh kakoty
            </Link>
        </div>
    );
};
