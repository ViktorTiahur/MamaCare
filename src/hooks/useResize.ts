import { useEffect, useState } from "react";

export default function useResize () {

    const [width, setWidth] = useState<number>(() => {
        return typeof window !== 'undefined' ? window.innerWidth : 0 
    })

    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}
        window.addEventListener('resize', handleResize)

        return () => window.addEventListener('resize', handleResize)
    }, [])

    return width > 1024;
}