import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getImgSize } from '@/lib.js';

// Get h and w of an img: 
// const { height, width } = await getImgSize("./public/mountain.jpeg")


const Layer = ({ layer, progress }) => {
    const { name, zIndex, imgLink, start, end, ref, height, width } = layer;
    useEffect(()=>{
        const viewportHeight = window.innerHeight;
        const siteHeight = document.body.scrollHeight;

        if(ref.current) {
            console.log(`need to move ${name}`)

            let sectionProgress = (progress - start) / (end - start);
            console.log(`${sectionProgress}: ${name}`)

            if(height - viewportHeight > 0) {
                // ref.current.style.top = `${(viewportHeight*1.5) - height}px`
                ref.current.style.top = `${((viewportHeight*1.5)-height) * (1-sectionProgress)}px`
                // 0 -> -height + viewportHeight
                // 0.5 -> -height * 0.5
                // console.log(ref.current.style.top);
            } else {
                ref.current.style.top = `${( (viewportHeight*1.05) - height ) * (1+sectionProgress)}px`
                // 0 -> 
            }
        }
    }, [progress])
    return <div className="fixed w-full" style={{ zIndex: zIndex }} ref={ref}>
        <Image src={imgLink} height={height} priority={true} width={width} alt={name} />
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
            end: 0.2,
            ref: useRef(),
            height: 480,
            width: 1920
        },
        {
            name: "mountain",
            zIndex: 2,
            imgLink: "/mountain.jpeg",
            start: 0,
            end: 0.8,
            ref: useRef(),
            height: 5400,
            width: 1920
        }
    ];

    return (
        <div className="background w-screen fixed left-0 top-0 -z-1 prevent-select">
            {layers.map((layer, idx)=>{
                return <Layer progress={progress} layer={layer} key={idx} />    
            })}
        </div>
    );
};
