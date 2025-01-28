import Link from "next/link";
import Image from "next/image";
import shake from "../../../public/shake.jpeg"


export default function Smoothie(){
    return(
        <div className="flex justify-center font-serif max-sm:flex max-sm:justify-center max-sm:p-10 px-10 max-sm:m-24">
            <div className="card6  sm: text-center divide-solid rounded-xl sm: h-[950px] w-[700px]  bg-card m-10 max-sm:text-center max-sm:divide-solid max-sm:rounded-xl max-sm:h-3/4 max-sm:w-[500px] max-sm:m-6">
            <Image src={shake} alt="Chocolate Smoothie" className="p-2 rounded-xl flex items-center justify-center h-[360px] w-[700px] max-sm:rounded-xl max-sm:flex max-sm:justify-center max-sm:items-center max-sm:h-[200px]"></Image>
            <h1 className="text-4xl  max-sm:text-2xl">Chocolate Smoothie</h1>
            <p className="text-xl max-sm:text-xs max-sm:font-extrabold"><q>Chocolate lovers unite! Wishing you a day filled with joy and deliciousness 
                <br />🍽️🌍</q></p>
            <br />
            <h2 className="text-2xl  text-orange-900 font-bold max-sm:text-xl">Ingredients:</h2>
            <ol>
                <li>1 banana (frozen for extra creaminess)</li>
                <li>1 tablespoon unsweetened cocoa powder</li>
                <li>1 tablespoon peanut butter or almond butter (optional)</li>
                <li>1 cup almond milk (or any milk of your choice)</li>
                <li>1 tablespoon honey or maple syrup (optional, for sweetness)</li>
                <li>1/4 teaspoon vanilla extract</li>
                <li>A handful of ice cubes</li>
            </ol>
            <br />
            <h2 className="text-2xl  text-orange-900 font-bold  max-sm:text-xl">Instructions:</h2>
            <p className="p-5 "> Add the banana, cocoa powder, peanut butter, almond milk, honey, vanilla extract, and ice cubes into a blender. Blend everything until smooth and creamy. If it's too thick, add more milk; if it's too thin, add more banana or ice.You can also add protein powder or chia seeds for extra nutrition. Pour into a glass and enjoy your chocolate smoothie! <br />🍫🥛❤❤🍫</p>
            <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/"}>Go to the Home</Link></button>
            </div>
        </div>
    )
}