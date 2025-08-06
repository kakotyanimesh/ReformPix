import { useEffect, useMemo } from "react";

export function useObjectUrl(file : File) {
    const url = useMemo(() => URL.createObjectURL(file), [file])

    useEffect(() => {
       return () => URL.revokeObjectURL(url)
    }, [url])
    return url 
    
}