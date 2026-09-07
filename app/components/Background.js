import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const Background = ({ dy }) => {
    const imageRef = useRef()
    useEffect(()=>{
        if(imageRef.current){
            const currentVal = parseInt(imageRef.current.style.top.split("px")[0])
            imageRef.current.style.top = `${currentVal+dy}px`
        }
    },[dy])
    return (
        <div ref={imageRef} style={{ top: -4250 }} className="background fixed left-0 -z-1 prevent-select">
            <Image className="w-full" src="/mountain.jpeg" height={5000} priority={true} width={1900} alt="Mountain_Img"/>
        </div>
    )
}
