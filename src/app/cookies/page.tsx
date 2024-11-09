import Link from "next/link"
import Image from "next/image"
import biscutes from "../../../public/cookies.jpg"
export default function Cookies(){
    return(
        <div className="font-serif flex justify-center text-center max-sm:m-24 max-sm:p-20">
        <div className="card3  text-center divide-solid rounded-xl sm: h-[1100px] w-[700px]  bg-card m-10 max-sm:text-center max-sm:divide-solid max-sm:rounded-lg max-sm:h-[1200px] max-sm:w-[1200px]">
          <Image src={biscutes} alt="breakFast" className="p-7 rounded-xl flex items-center justify-center h-[400px] max-sm:p-4 max-sm:rounded-xl max-sm:flex max-sm:items-center max-sm:justify-center max-sm:h-[300px]"></Image>  
          <h1 className="text-4xl max-sm:text-2xl">Butter Cookies</h1>
          <p className="text-xl max-sm:text-xs"><q>Butter Cookies: the language everyone understands 🍽️🌍</q></p>

          <br />
          <h2 className="text-2xl  text-orange-900 font-bold max-sm:text-xl">Ingredients:</h2>
          <ol className="list-inside max-sm:text-xs">
            <li>2 cups all-purpose flour</li>
            <li>1 tablespoon baking powder</li>
            <li>1 teaspoon salt</li>
            <li>1 tablespoon sugar (optional)</li>
            <li>6 tablespoons cold unsalted butter (cut into small cubes)</li>
            <li>3/4 cup cold milk (or buttermilk)</li>
          </ol>
          <br />
          <h2 className="text-2xl  text-orange-900 font-bold max-sm:text-xl">Instructions:</h2>
         <p className="p-4 max-sm:text-[7.5px]">Preheat oven to 450°F (230°C). In a large mixing bowl, whisk together flour, baking powder, salt, and sugar (if using).
         Add the cold butter cubes to the dry ingredients. Use a pastry cutter or your hands to mix the butter into the flour mixture until it resembles coarse crumbs. Pour in the cold milk and gently stir with a fork until the dough just comes together. Do not overmix. Turn the dough onto a lightly floured surface and gently knead it a few times (about 5-6 times) until it forms a cohesive dough. Roll the dough out to about 1/2 inch thick. Use a biscuit cutter or a glass to cut out biscuits. Re-roll the dough scraps and cut more biscuits until all the dough is used.
         Place the biscuits on a baking sheet lined with parchment paper, with the edges slightly touching. Bake for 10-12 minutes, or until the tops are golden brown. Let the biscuits cool slightly before serving. They're best enjoyed warm with butter, honey, or jam! ❤❤💕💕💕</p>

      <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 max-sm:items-center"><Link href={"/"}>Go to the Home</Link></button>
        </div>

        </div>
    )
}