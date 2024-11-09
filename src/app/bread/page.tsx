import Link from "next/link"
import Image from "next/image"
  import bread from "../../../public/chickenBread.jpg"

export default function Bread(){
    return(
        <div className="flex justify-center max-sm:m-24 max-sm:p-20">
            <div className="card2  text-center divide-solid rounded-xl sm: h-[1600px] w-[700px] bg-card m-10 max-sm:text-center max-sm:divide-solid max-sm:rounded-lg max-sm:h-[2200px] max-sm:w-[800px]">
            <Image src={bread} alt="breakFast" className="p-7 rounded-xl flex items-center justify-center h-[300px] max-sm:p-3 max-sm:rounded-lg max-sm:flex max-sm:items-center max-sm:h-[300px]"></Image>
            <h1 className="text-4xl font-serif font-bold max-sm:text-2xl ">Chicken Bread</h1>
            
            <p className="text-xl max-sm:text-xs max-sm:p-5">The chicken bread is one of my favourite braided and stuffed breads. Below are the step by step instructions with pics on how to make the recipe.
            </p>
            <br />
                <h2 className="text-2xl font-serif text-orange-900 font-bold max-sm:text-xl">Ingredients for Dough</h2>
                <br />
                <ul className="max-sm:text-xs  ">
                    <li>4 cups all purpose/plain flour</li>
                    <li>1 tbsp. instant yeast</li>
                    <li>2 tbsp. powdered milk (optional)</li>
                    <li>1 tsp. salt</li>
                    <li>4 tbsp. oil</li>
                    <li>1 egg (plus 1 for glazing)</li>
                    <li>1 tsp. castor sugar</li>
                    <li>1/4 tsp baking powder (to reduce any yeasty smell)</li>
                </ul>
                <br />
                <h2 className="text-2xl font-serif text-orange-900 font-bold max-sm:text-xl">Ingredients for Chicken Filling</h2>
                <br />
                <ol className="max-sm:text-xs ">
                    <li>1 1/2 - 2 cups chicken boiled and shredded (250-300 gm when uncooked)</li>
                    <li>1 medium or 2 small onion chopped finely</li>
                    <li>1 tsp. salt</li>
                    <li>1 tsp. black pepper</li>
                    <li>2 tbsp. coriander leaves</li>
                    <li>4 chopped green chillies</li>
                    <li>1 tsp. garam masala powder</li>
                    <li>2 tbsp. flour</li>
                    <li>2 tbsp. butter</li>
                    <li>1 cup milk</li>
                    <li>sesame seeds as required</li>
                </ol>

                <br />
                <h3 className="text-xl font-serif text-orange-900 font-bold max-sm:text-xs">Chicken Filling</h3>
                <ol className="max-sm:text-xs  ">
                    <li>Heat 2 tbsp butter, fry onion until soft.</li>
                    <li>Add 2 tbsp flour, 1 tsp salt, 1 tsp black pepper, 1 tsp garam masala.</li>
                    <li>Stir in milk and cook until thick.</li>
                    <li>Mix in shredded chicken, green chilies, and coriander leaves.</li>
                    <li>Let it cool completely.</li>
                </ol>
                <br />
                <h3  className="text-xl font-serif text-orange-900 font-bold">Dough:</h3>
                <ol className="max-sm:text-xs  ">
                    <li>Mix 4 cups flour, 1 tsp salt, 1 tsp sugar, 2 tbsp milk powder, 1 tsp yeast, 1/4 tsp baking powder, 4 tbsp oil, and 1 egg.</li>
                    <li>Knead into medium-soft dough with warm water and let it rise for 1 hour.</li>
                    <li>Divide dough into 2 or 3 portions.</li>
                </ol >
                <h3  className="text-xl font-serif text-orange-900 font-bold">Assembly:</h3>
                <ol className="max-sm:text-xs ">
                    <li>Roll out dough into a rectangle, brush with butter.</li>
                    <li>Place filling in the center, make slits on the sides.</li>
                    <li>Cross the slits over the filling in a crisscross pattern.</li>
                    <li>Leave a tail at the end for decoration.</li>
                    <li>Grease tray, place bread, apply egg wash, sprinkle sesame seeds.</li>
                    <li>Bake at 200°C for 25 minutes or until golden.</li>
                </ol>
                <br />
                <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/"}>Go to the Home</Link></button>
      </div>
            </div>
        
    )
}