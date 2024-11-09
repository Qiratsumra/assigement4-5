import Link from "next/link";
import Image  from "next/image";
import cake from "../../../public/image.png";
export default function Cake(){
    return(
     <div className="flex justify-center font-serif max-sm:flex max-sm:justify-center max-sm:m-24">
          <div className="card6  text-center divide-solid rounded-xl  h-[1560px] w-[700px]  bg-card m-10 max-sm:divide-solid max-sm:rounded-lg max-sm:h-3/4 max-sm:w-[900px]">
          <Image src={cake} alt="cake" className="p-2 rounded-xl flex items-center justify-center max-sm:flex max-sm:items-center"></Image>
          <h1 className="text-4xl max-sm:text-2xl max-sm:font-bold">Chocolate Cake</h1>
          <p className="text-xl max-sm:text-xs"><q>Cake: proof that even the best things in life are better with frosting 
            <br /> 🍽️🌍</q></p>
            <h2 className="text-2xl  text-orange-900 font-bold max-sm:text-xl max-sm:font-bold">Ingredients:</h2>
            <ol>
                <h3 className="text-xl text-orange-900 font-bold underline max-sm:text-[15px]">For Cake</h3>
            <li className="max-sm:text-[20px]">1 and 3/4 cups (220g) all-purpose flour</li>
            <li>3/4 cup (65g) unsweetened cocoa powder</li>
            <li>1 and 1/2 teaspoons baking powder</li>
            <li>1 and 1/2 teaspoons baking soda</li>
            <li>1 teaspoon salt</li>
            <li>2 cups (400g) granulated sugar</li>
            <li>2 large eggs, at room temperature</li>
            <li>1 cup (240ml) whole milk</li>
            <li>1/2 cup (120ml) vegetable oil</li>
            <li>2 teaspoons vanilla extract</li>
            <li>1 cup (240ml) boiling water (or hot coffee for a richer flavor)</li>
            </ol>
            <ol>
            <h3 className="text-xl text-orange-900 font-bold underline">For Cake Frosting:</h3>
            <li>1 cup (230g) unsalted butter, softened</li>
            <li>3 and 1/2 cups (420g) powdered sugar</li>
            <li>1 cup (85g) unsweetened cocoa powder</li>
            <li>1/2 cup (120ml) whole milk</li>
            <li>2 teaspoons vanilla extract</li>
            </ol>
            <br />
            <h2 className="text-2xl  text-orange-900 font-bold">Instructions:</h2>
            <h3 className="text-xl text-orange-900 font-bold underline">For Cake</h3>
            <p className="p-3">Preheat the oven to 350°F (175°C). Grease and flour two 9-inch round cake pans. In a large bowl, sift together the flour, cocoa powder, baking powder, baking soda, and salt.  In another bowl, beat the sugar, eggs, milk, oil, and vanilla until well combined.  Gradually add the dry ingredients to the wet ingredients, mixing just until combined. Stir in the boiling water (or hot coffee) until the batter is smooth (it will be thin). Divide the batter evenly between the prepared pans and bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean. Let the cakes cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely.</p>
            
            <h3 className="text-xl text-orange-900 font-bold underline">For Cake Frosting:</h3>
            <p className="p-3">In a large bowl, beat the softened butter until creamy. Gradually add powdered sugar and cocoa powder, beating after each addition. Add vanilla, milk, and a pinch of salt, then continue to beat until the frosting is fluffy and smooth.  Once the cake layers are completely cool, frost the cake. Enjoy your rich, moist chocolate cake!
                <br />
                🎂🎂
            </p>
            <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><Link href={"/"}>Go to the Home</Link></button>
          </div>
     </div>
    )
}