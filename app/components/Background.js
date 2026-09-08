import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getImgSize } from '@/lib.js'

export const Background = ({ dy }) => {
    const imageRef = useRef()
    const imgSize = {
        "height": 5400,
        "width": 1920
    };

    const computeTop = (imgHeight, screenHeight) => {
        return -1 * (imgHeight - screenHeight*2)
    }

    useEffect(()=>{
        if(imageRef.current) {
            let top = computeTop(imgSize.height, window.innerHeight)
            imageRef.current.style.top = `${top}px`
        }
    }, [])

    // useEffect(() => {
    //    (async()=>{
    //        const { height, width } = await getImgSize("./public/mountain.jpeg")
    //        console.log({ height, width })
    //    })()        
    // }, [])

    useEffect(()=>{
        if(imageRef.current){
            const currentVal = parseInt(imageRef.current.style.top.split("px")[0])
            imageRef.current.style.top = `${currentVal+(dy*1.5)}px`
        }
    },[dy])
    return (
        <div ref={imageRef} className="background fixed left-0 -z-1 prevent-select">
            <Image className="w-screen" src="/mountain.jpeg" height={5000} priority={true} width={1900} alt="Mountain_Img"/>
        </div>
    )
}
