'use client'
import {useRouter} from 'next/navigation'
const Logo = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')}>
            <h1 className=" relative text-[1.5rem] md:text-[2rem] text-rose-500">Bookings <span className="text-[4rem] md:text-[5rem] absolute right-[-1.2rem] bottom-[-1rem] text-black">.</span></h1>
        </div>
    )
}

export default Logo
