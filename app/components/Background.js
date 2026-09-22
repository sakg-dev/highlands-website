import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getImgSize } from '@/lib.js';

// Get h and w of img: const { height, width } = await getImgSize("./public/mountain.jpeg")
export const Background = ({ progress }) => {
    const imageRef = useRef();
    const imgSize = {
        "height": 5400,
        "width": 1920
    };

    useEffect(()=>{
        if(imageRef.current){
            const screenHeight = screen.height * 1.5;
            imageRef.current.style.top = `-${(imgSize.height - screenHeight) * (1-progress)}px` 
        }
    },[progress]);

    return (
        <div ref={imageRef} className="background fixed left-0 -z-1 prevent-select">
            <Image className="w-screen" src="/mountain.jpeg" height={5000} priority={true} width={1900} alt="Mountain_Img"/>
        </div>
    );
};
