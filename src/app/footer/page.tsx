import Link from "next/link"

export default function Footer(){
    return(
        <main className="bg-gray-900 text-white font-serif flex justify-around w-[100%] max-sm:w-[590px]">
            <div className="flex justify-between items-center max-sm:flex max-sm:justify-between max-sm:items-center">
                <div className="pr-40 max-sm:pr-0"> <h1 className="text-2xl font-bold max-sm:text-xl">FOOD<strong className="text-orange-500">IEZ</strong>.BL<strong>OG</strong> </h1></div>
                
               
                <div className="p-5 pb-[94px] max-sm:pb-[45px]">
                    <h2 className="font-bold max-sm:text-xs max-sm:font-extrabold">Quite Links</h2>
                    <ol>
                        <Link className="max-sm:text-xs" href={"/"}><li>Home</li></Link>
                        <Link className="max-sm:text-xs" href={"/about"}>About</Link>
                        <Link className="max-sm:text-xs" href={"/contactus"}><li>Contact</li></Link>
                    </ol>
                </div>
                <div className="p-5 ">
                    <h2 className="font-bold max-sm:font-extrabold max-sm:text-xs">Recipes</h2>
                    <ol>
                        <Link className="max-sm:text-xs" href={"/cake"}><li>Cake</li></Link>
                        <Link className="max-sm:text-xs" href={"bread"}><li>Chicken Bread</li></Link>
                        <Link className="max-sm:text-xs" href={"cookies"}><li>Butter Cookies</li></Link>
                        <Link className="max-sm:text-xs" href={"sandwish"}><li>Club Sandwish</li></Link>
                        <Link className="max-sm:text-xs" href={"pasta"}><li>Creamy Garlic Parmesan Pasta</li></Link>
                        <Link className="max-sm:text-xs" href={"smoothie"}><li>Chocolate Smoothie</li></Link>
                    </ol>
                </div>
               
                </div>
            
        </main>
    )
}