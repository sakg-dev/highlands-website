
const Step = ({idx, title, description})=>{
    return <div className="border p-1 w-[40vh] min-h-[10vh]">
        <h3 className="text-lg font-semibold">{idx+1}. {title}</h3>
        <p>{description}</p>
    </div>
}

export const HowItWorks = ()=>{
    const steps = [
        {
            title: "Pick a Mountain",
            description: "Choose a mountain to climb. Each mountain is made up of several stages"
        },
        {
            title: "Start Climbing",
            description: "Work on your software or hardware projects to climb through its stages"
        },
        {
            title: "Beat the Clock",
            description: "Every stage has its own time requirement and deadline. Meet the requirement before time runs out to move higher"
        },
        {
            title: "Reach the Summit",
            description: "Complete every stage of the mountain. Your projects can be made across multiple stages as you're climbing a mountain, not just working on one project"
        },
        {
            title: "Ship the Mountain",
            description: "When you finish a mountain, submit the projects you've built during the climb for review"
        },
        {
            title: "Climb Higher",
            description: "Once your mountain is approved, you receive its reward, such as bonus currency, and can start the next mountain"
        }
    ]
    return (
        <div className="h-screen border flex justify-around items-center">
            <div className="flex flex-col gap-8">
                {steps.map(({title, description}, idx)=>{
                    return <Step key={idx} idx={idx} title={title} description={description}/>
                })}
            </div>
            <h2 className="text-4xl">How it Works</h2>
        </div>
    )
}
