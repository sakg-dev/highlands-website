import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getImgSize } from '@/lib.js';

// Get h and w of an img: 
// const { height, width } = await getImgSize("./public/mountain.jpeg")


const Layer = ({ layer }) => {
    const { name, zIndex, imgLink, start, end, ref, height, width } = layer;
    useEffect(()=>{
        setInterval(()=>{
            const top = parseInt(ref.current.style.top.split("px")[0])
            ref.current.style.top = `${top+1}px`
        }, 5)
    }, [])
    return <div className="fixed left-0" style={{ top: 0, zIndex: zIndex }} ref={ref}>
        <Image className="w-full" src={imgLink} height={height} priority={true} width={width} alt="Mountain_Img"/>
    </div>
}


export const Background = ({ progress }) => {
    // zIndex is relative, the max is -1, the least is (-1) - (len(layers) - 1) -- done by css itself
    const layers = [
        {
            name: "grassland",
            zIndex: 3,
            imgLink: "/grassland.png",
            start: 0,
            end: 0.1,
            ref: useRef(),
            height: 480,
            width: 1920
        },
        {
            name: "mountain",
            zIndex: 2,
            imgLink: "/mountain.jpeg",
            start: 0,
            end: 0.9,
            ref: useRef(),
            height: 5400,
            width: 1920
        }
    ];

    /*useEffect(()=>{
        if(imageRef.current){
            const screenHeight = screen.height * 1.5;
            imageRef.current.style.top = `-${(imgSize.height - screenHeight) * (1-progress)}px` 
        }
    },[progress]);
    */
    return (
        <div className="background w-screen fixed left-0 top-0 -z-1 prevent-select">
            {layers.map((layer, idx)=>{
                return <Layer layer={layer} key={idx} />    
            })}
        </div>
    );
};
