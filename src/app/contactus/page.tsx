

export default function ContactUs(){
    return(
        <form className="flex justify-center p-10 font-serif items-center text-white ">
        <div className="sm:h-[500px] w-[400px] bg-gray-800 text-center divide-solid rounded-xl contact scale-up-center">
        <h1 className="text-4xl font-bold text-white p-5">FOOD<strong className="text-orange-500">IEZ</strong>.BL<strong>OG</strong> </h1>
        

        {/* Contact Form */}
        <div className="border-2 h-[80%] w-80  ml-10 rounded-lg">
        <h2 className="text-2xl font-bold text-white p-5 ">Contact Us</h2>
        <fieldset>
            <legend className="p-1">
            <label htmlFor="name" className="p-2">Name:</label>
            <br />
            <input type="text" className="rounded-md" placeholder="Enter your name" />
            </legend>
            <br />
            <legend className="p-1">
            <label htmlFor="email" className="p-2" >Email:</label>
            <br />
            <input type="email" className="rounded-md" placeholder="Enter your Email" />
            </legend>
            <br />
            <legend className="p-1">
                <label htmlFor="" className="p-2" >Any Qustion?</label>
                <textarea name="textArea" id="textArea" placeholder=" Any Question?" className="p-4 rounded-lg resize-none"></textarea>
            </legend>
            <button type="button" className="h-7 w-20 border-2 rounded-md text-black bg-card">Submit</button>
        </fieldset>
        </div>
       
</div>
        
        </form>
        
    )
}