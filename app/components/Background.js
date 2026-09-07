import Image from 'next/image';

export const Background = () => {
    return (
        <div className="background fixed -top-1100 left-0 -z-1 prevent-select">
            <Image className="w-full" src="/mountain.jpeg" height={5000} priority={true} width={1900} alt="Mountain_Img"/>
        </div>
    )
}
