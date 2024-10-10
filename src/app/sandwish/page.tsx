import Link from "next/link";
import Image from "next/image";
import sandwish from "../../../public/clubSandwish.jpeg"


export default function Sandwish(){
    return(
        <div className="flex justify-center font-serif">
             <div className="card2  text-center divide-solid rounded-xl sm: h-[1150px] w-[700px] bg-card m-10">
             <Image src={sandwish} alt={"sandwish"} className="p-2 rounded-xl flex items-center justify-center h-[320px] w-[700px]"></Image>
             <h1 className="text-4xl  text-orange-900 font-bold">Club Sandwish</h1>
             <p className="text-xl"><q>Life is good when you have a great Sandwish  🍽️🌍</q></p>
             <h2 className="text-2xl  text-orange-900 font-bold">Ingredients:</h2>
             <br />
             <ol>
                <li>3 slices of sandwich bread (white or whole wheat)</li>
                <li>2 slices of turkey or chicken breast (cooked or deli meat)</li>
                <li>2 slices of ham (cooked or deli meat)</li>
                <li>2 slices of bacon (cooked until crispy)</li>
                <li>2 slices of cheddar or Swiss cheese</li>
                <li>2 lettuce leaves</li>
                <li>2-3 tomato slices</li>
                <li>Mayonnaise</li>
                <li>Mustard (optional)</li>
                <li>Salt and pepper (to taste)</li>
                <li>Butter (optional, for toasting the bread)</li>
             </ol>
             <br />
             <h2 className="text-2xl  text-orange-900 font-bold">Instructions:</h2>
             <p className="p-5">Lightly toast all three slices of bread until golden. You can spread a bit of butter on each side before toasting if desired.  Cook the bacon in a pan over medium heat until crispy. Remove and place on paper towels to drain the excess oil. Spread mayonnaise on one slice of toast. Place a lettuce leaf on the mayo. Add 1-2 slices of tomato, seasoning lightly with salt and pepper. Top with the cooked bacon and a slice of turkey or chicken. Place the second slice of toast on top. Spread mayonnaise on top of the second toast. Add a slice of cheese, ham, and another lettuce leaf. Optionally, spread mustard on the final piece of bread. Place the last slice of bread on top to finish the sandwich. Use a sharp knife to cut the sandwich into quarters diagonally. To keep the sandwich from falling apart, you can secure each quarter with a toothpick. Serve your club sandwich with a side of fries, chips, or a salad for a complete meal!
                <br />🥪🥪🥪❤❤❤</p>

                <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/"}>Go to the Home</Link></button>
             </div>
        </div>
    )
}