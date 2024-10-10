import Link from "next/link"
export default function Header (){
    return(
    
<header className= "sm: text-white flex justify-between p-4 font-serif h-160 w-auto  bg-gray-800 ">
            <h1 className="text-2xl font-bold">FOOD<strong className="text-orange-500">IEZ</strong>.BL<strong>OG</strong> </h1>
            <ul className="flex justify-center gap-10 mt-22">
                <Link href={"/"}><li className="hover:text-xl ">Home</li></Link>
                <Link href={"/about"}><li className="hover:text-xl">About</li></Link>
                <Link href={"/contactus"}><li className="hover:text-xl">Contact Us</li></Link>
            </ul>
        </header>
    )
}