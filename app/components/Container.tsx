'use client'

 //This files serves as a container in which we can use to pass any element we want and use it throughout the website.

interface ContainerProps {
  children:React.ReactNode;  
}
const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div
        className="
        max-w-[2520px]
        mx-auto
        xl:px-18 
        md:px-10
        sm:px-2
        px-4
      "
        >
            {children}
        </div>
    )
}

export default Container
