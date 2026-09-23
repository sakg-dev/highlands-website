import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getImgSize } from '@/lib.js';

// Get h and w of an img: 
// const { height, width } = await getImgSize("./public/mountain.jpeg")


const Layer = ({ layer, progress }) => {
    const { name, zIndex, imgLink, start, end, ref, height, width, direction } = layer;
    useEffect(()=>{
        const viewportHeight = window.innerHeight;
        const siteHeight = document.body.scrollHeight;

        if(ref.current) {
            let sectionProgress = (progress - start) / (end - start);
            let magicNumber = (height - viewportHeight > 0) ? 1.5 : 1.12; // idk why i need these numbers but kinda working rn..
            console.log(`${name}: ${magicNumber}`);
            let directionBasedSecProgress = direction=="u2d" ? 1 + sectionProgress : 1 - sectionProgress;
            ref.current.style.top = `${((viewportHeight*magicNumber)-height) * directionBasedSecProgress}px`
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
            direction: "u2d",
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
            direction: "d2u",
            end: 0.8,
            ref: useRef(),
            height: 5400,
            width: 1920
        },
        {
            name: "clouds",
            zIndex: 3,
            imgLink: "/clouds.png",
            start:0.9,
            direction: "u2d",
            end: 0.97,
            ref: useRef(),
            height: 960,
            width: 1920
        },
        {
            name: "yerevan",
            zIndex: 1,
            imgLink: "/yerevan.jpg",
            start:1.5,
            direction: "u2d",
            end: 1.75,
            ref: useRef(),
            height: 1280,
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
