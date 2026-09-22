"use client";
import { Hero } from '@/app/components/Hero.js'
import { HowItWorks } from '@/app/components/HowItWorks.js'
import { Background } from '@/app/components/Background.js'
import { WhatIs } from '@/app/components/WhatIs.js'
import { Prizes } from '@/app/components/Prizes.js'
import useTracker from '@/app/hooks/useTracker.js'

export default function Home() {
    const [dy] = useTracker();

    let sections = [
        Hero,
        WhatIs,
        HowItWorks,
        Prizes
    ]

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
