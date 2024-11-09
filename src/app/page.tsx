import Image from "next/image";


// import Pictures Here:
import cake from "../../public/image.png"
import biscutes from "../../public/cookies.jpg"
import sandwish from "../../public/clubSandwish.jpeg"
import bread from "../../public/chickenBread.jpg"
import pasta from "../../public/Pasta.jpg"
import shake from "../../public/shake.jpeg"
import Link from "next/link";


export default function Home() {
  return (

   <main className="font-serif">




      {/* Blog Heading Section */}
    <h1 className="font-serif text-center m-10 text-5xl text-orange-500 font-bold max-sm:text-3xl max-sm:m-4 max-sm:text-center max-sm:ml-28 max-sm:inline">My Food Blog Website by Qirat Saeed</h1>


    {/* Card Section */}
    <div className="flex justify-evenly flex-wrap p-10 max-sm:items-center max-sm:block">


      {/* Cake Card */}
      <div className="card1 sm: text-center divide-solid rounded-xl   h-[410px] w-[400px]  bg-card m-10 home scale-in-center">
        <Image src={cake} alt="breakFast" className="p-2 rounded-xl flex items-center justify-center"></Image>
        <h1 className="text-2xl">Chocolate Cake</h1>
        <p className="text-xl"><q>Cake: proof that even the best things in life are better with frosting  🍽️🌍</q></p>
        <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/cake"}>Get the recipe</Link></button>
      </div>

      {/* Bread Card */}
      <div className="card2 sm: text-center divide-solid rounded-xl  h-[420px] w-[400px] bg-card m-10 home scale-in-center">
      <Image src={bread} alt="breakFast" className="p-2 rounded-xl flex items-center justify-center h-[270px]"></Image>
      <h1 className="text-2xl">Chicken Bread</h1>
      <p className="text-xl"><q>The best part of the day: Chicken sandwich time!  🍽️🌍</q></p>
      <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/bread"}>Get the recipe</Link></button>
      </div>


{/* Cookies Card */}
      <div className="card3  sm: text-center divide-solid rounded-xl h-[420px] w-[400px]  bg-card m-10 home scale-in-center">
      <Image src={biscutes} alt="breakFast" className="p-2 rounded-xl flex items-center justify-center h-[270px]"></Image>
      <h1 className="text-2xl">Butter Cookies</h1>
      <p className="text-xl"><q>Butter Cookies: the language everyone understands 🍽️🌍</q></p>
      <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/cookies"}>Get the recipe</Link></button>
      </div>


{/* Chicken Club Sandwish Card */}
      <div className="card4  sm: text-center divide-solid rounded-xl h-[420px] w-[400px]  bg-card m-10 home scale-in-center">
        <Image src={sandwish} alt={"sandwish"} className="p-2 rounded-xl flex items-center justify-center h-[270px] w-[400px]"></Image>
        <h1 className="text-2xl">Club Sandwish</h1>
        <p className="text-xl"><q>Life is good when you have a great Sandwish  🍽️🌍</q></p>
        <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/sandwish"}>Get the recipe</Link></button>
      </div>


{/* Pasta Card */}
      <div className="card5  sm: text-center divide-solid rounded-xl h-[420px] w-[400px]  bg-card m-10 home scale-in-center">
        <Image src={pasta} alt="pasta" className="p-2 rounded-xl flex items-center justify-center h-[270px] w-[400px]"></Image>
        <h1 className="text-2xl">Creamy Garlic Parmesan Pasta</h1>
        <p className="text-xl"><q>The perfect meal for me is pasta with a little bit of cheese 🍽️🌍</q></p>
        <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/pasta"}>Get the recipe</Link></button>
      </div>


{/* Chocolate Smoothie Card */}
      <div className="card6  sm: text-center divide-solid rounded-xl h-[420px] w-[400px]  bg-card m-10 home scale-in-center">
        <Image src={shake} alt="Chocolate Smoothie" className="p-2 rounded-xl flex items-center justify-center h-[260px] w-[400px]"></Image>
        <h1 className="text-2xl">Chocolate Smoothie</h1>
        <p className="text-xl"><q>Chocolate lovers unite! Wishing you a day filled with joy and deliciousness 🍽️🌍</q></p>
        <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/smoothie"}>Get the recipe</Link></button>
      </div>
    </div>
   </main>
  );
}
