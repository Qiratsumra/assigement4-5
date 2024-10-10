import Link from "next/link"

export default function Footer(){
    return(
        <main className="bg-gray-900 text-white font-serif flex justify-around">
            <div className="flex justify-between items-center">
                <div className="pr-40 "> <h1 className="text-2xl font-bold">FOOD<strong className="text-orange-500">IEZ</strong>.BL<strong>OG</strong> </h1></div>
                
               
                <div className="p-5 pb-[94px]">
                    <h2 className="font-bold ">Quite Links</h2>
                    <ol>
                        <Link href={"/"}><li>Home</li></Link>
                        <Link href={"/about"}>About</Link>
                        <Link href={"/contactus"}><li>Contact</li></Link>
                    </ol>
                </div>
                <div className="p-5 ">
                    <h2 className="font-bold">Recipes</h2>
                    <ol>
                        <Link href={"/cake"}><li>Cake</li></Link>
                        <Link href={"bread"}><li>Chicken Bread</li></Link>
                        <Link href={"cookies"}><li>Butter Cookies</li></Link>
                        <Link href={"sandwish"}><li>Club Sandwish</li></Link>
                        <Link href={"pasta"}><li>Creamy Garlic Parmesan Pasta</li></Link>
                        <Link href={"smoothie"}><li>Chocolate Smoothie</li></Link>
                    </ol>
                </div>
               
                </div>
            
        </main>
    )
}