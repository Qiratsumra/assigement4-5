import Link from "next/link"
export default function About(){
    return(
        <div className=" h-auto w-auto flex justify-center p-10 font-serif max-sm:h-3/4 max-sm:p-6">
        <div className="text-center divide-solid rounded-xl text-white  bg-gray-900 h-[650px] w-[500px] about shadow-drop-2-bottom max-sm:text-center max-sm:divide-solid max-sm:rounded-lg max-sm:w-[700px] max-sm:h-[700px]">

             <h1 className="font-serif text-center m-10 text-5xl text-orange-500 font-bold max-sm:text-center max-sm:m-5 max-sm:text-[25px]">My Food Blog Website by Qirat Saeed</h1>
             <p className="p-2">
             We’re passionate food lovers who believe that good food brings people together. Whether you’re here for easy weeknight dinners, indulgent desserts, or global flavors, we’ve got something delicious for everyone.
             </p>
             <p className="p-2">Our journey started in 2024, driven by a love for cooking and a desire to share recipes that anyone can recreate at home. We explore everything from comfort classics to healthy dishes, always with a focus on fresh ingredients and flavor-packed meals.</p>
             <p className="p-2">In addition to mouth-watering recipes, you’ll find helpful cooking tips, ingredient guides, and inspiration for every meal of the day. Our goal is to make cooking approachable and fun for everyone, whether you're a kitchen novice or a seasoned home chef.</p>

             <button className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-500"><Link href={"/"}>Go to the Home</Link></button>
      </div>

        </div>
        
    )
} 