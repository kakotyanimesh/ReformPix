"use client"
import { useObjectUrl } from "@/lib/hook/useUrl"
import { useFileStore } from "@/lib/store/file.store"
import Image from "next/image"
import { Button } from "./button"
import { Cancel } from "./icons/cancel"

export const ImageViewer = ({file, index} : {file : File, index : number}) => {
    const { removeImageFile } = useFileStore()
    const url = useObjectUrl(file)
    // alert(url)
    // console.log(url);
    
    return (
        <div
            className='overflow-hidden relative'>
            <Image
                draggable={false}
                unoptimized
                priority
                src={url}
                width={300}
                height={300}
                alt='image'
                className='size-42'
            />
            <Button onClick={() => removeImageFile(index)} className="absolute top-2 right-2 p-1" variants={"secondary"}>
                <Cancel />
            </Button>
        </div>
    )
}