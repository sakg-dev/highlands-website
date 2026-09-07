"use client";
import { Hero } from '@/app/components/Hero.js'
import { HowItWorks } from '@/app/components/HowItWorks.js'
import { Background } from '@/app/components/Background.js'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
    let sections = [
        Hero,
        HowItWorks
    ]

    const scrollY = useRef(0);
    const [dy, setDy] = useState(0);

    useEffect(()=>{
        const handleScroll = (event)=>{
            // console.log("scrolling")
            // console.log(event)
            const oldY = scrollY.current;
            scrollY.current = window.scrollY;
            setDy(scrollY.current - oldY);
        }
        window.addEventListener("scroll", handleScroll)
        // TODO: rmv the event when return
    }, [])


    return (
        <div className="overflow-x-hidden">
            <Background dy={dy} />
            <div className="flex flex-col">
                {sections.map((_, idx)=>{
                    let Comp = sections[idx]
                    return <Comp key={idx} />
                })}
            </div>
        </div>
    );
}
