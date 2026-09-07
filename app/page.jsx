"use client";
import { Hero } from '@/app/components/Hero.js'
import { HowItWorks } from '@/app/components/HowItWorks.js'
import { Background } from '@/app/components/Background.js'

export default function Home() {
    let sections = [
        Hero,
        HowItWorks
    ]
    return (
        <div className="overflow-x-hidden">
            <Background />
            <div className="flex flex-col">
                {sections.map((_, idx)=>{
                    let Comp = sections[idx]
                    return <Comp key={idx} />
                })}
            </div>
        </div>
    );
}
