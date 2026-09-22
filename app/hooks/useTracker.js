import { useEffect, useRef, useState } from 'react'

const useTracker = () => {
    const scrollY = useRef(0);
    const [dy, setDy] = useState(0);

    // Get the total height of the website, get the height of the individual comps(through sections arr), based on current scroll, calculate percentage of thing that has been scrolled and triger if any callback is given..
    useEffect(()=>{
        const handleScroll = (event)=>{
            // console.log("scrolling")
            // console.log(event)
            const oldY = scrollY.current;
            scrollY.current = window.scrollY;
            setDy(scrollY.current - oldY);
            console.log(scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        // TODO: rmv the event when return
    }, [])

    return [dy]
}

export default useTracker;
