import { useEffect, useRef, useState } from 'react'

const useTracker = () => {
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const siteHeight = document.body.scrollHeight;
        const screenHeight = screen.height;

        const handleScroll = (event) => {
            const currentScrollY = window.scrollY;
            const currentHeightProgress = currentScrollY / (siteHeight - screenHeight);
            setProgress(currentHeightProgress)
        };

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll) };
    }, []);

    return [progress];
}

export default useTracker;
