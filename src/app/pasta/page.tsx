import Link from "next/link";
import Image from "next/image";
import pasta from "../../../public/Pasta.jpg"

export default function Pasta(){
    return(
        <div className="flex justify-center font-serif">
             <div className="card2  text-center divide-solid rounded-xl sm: h-[950px] w-[700px] bg-card m-10">
             <Image src={pasta} alt="pasta" className="p-2 rounded-xl flex items-center justify-center h-[270px] w-[700px]"></Image>
             <h1 className="text-4xl">Creamy Garlic Parmesan Pasta</h1>
             <p className="text-xl"><q>The perfect meal for me is pasta with a little bit of cheese 🍽️🌍</q></p>
             <br />
             <h2 className="text-2xl  text-orange-900 font-bold">Ingredients:</h2>
             <ol>
                <li>200g pasta (spaghetti, fettuccine, or your favorite type)</li>
                <li>2 tablespoons butter</li>
                <li>4 garlic cloves, minced</li>
                <li>1 cup heavy cream</li>
                <li>1 cup grated Parmesan cheese</li>
                <li>Salt and pepper to taste</li>
                <li>Fresh parsley for garnish (optional)</li>
                <li>Red pepper flakes for a bit of spice (optional)</li>
             </ol>
             <br />
             <h2 className="text-2xl  text-orange-900 font-bold">Instructions:</h2>
             <p>In a large pot, bring salted water to a boil. Add the pasta and cook according to the package instructions until al dente. Reserve 1/2 cup of pasta water, then drain the rest. In a large skillet, melt the butter over medium heat. Add the minced garlic and sauté until fragrant, about 1-2 minutes (be careful not to burn it). Stir in the heavy cream, bringing it to a simmer. Let it cook for 3-4 minutes, allowing it to thicken slightly. Gradually whisk in the Parmesan cheese, stirring until it's fully melted and the sauce is smooth. If the sauce becomes too thick, add a bit of the reserved pasta water to loosen it up. Add the cooked pasta to the sauce, tossing to coat evenly. Season with salt, pepper, and red pepper flakes (if using) to taste. Garnish with freshly chopped parsley and extra Parmesan if desired. Serve immediately and enjoy! 
                <br />🍝🍝❤❤❤
             </p>
             <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/"}>Go to the Home</Link></button>
             </div>
        </div>
    )
}