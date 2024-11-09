

export default function ContactUs(){
    return(
        <form className="flex justify-center p-10 font-serif items-center text-white max-sm:flex max-sm:justify-center max-sm:p-5 max-sm:items-center">
        <div className="h-[500px] w-[400px] bg-gray-800 text-center divide-solid rounded-xl contact scale-up-center max-sm:h-[500px] max-sm:w-[400px] max-sm:divide-solid">
        <h1 className="text-4xl font-bold text-white p-5 max-sm:text-2xl">FOOD<strong className="text-orange-500">IEZ</strong>.BL<strong>OG</strong> </h1>
        

        {/* Contact Form */}
        <div className="border-2 h-[80%] w-80  ml-10 rounded-lg max-sm:border-2 max-sm:h-[400px] max-sm:w-[50%] max-sm:ml-20">
        <h2 className="text-2xl font-bold text-white p-5 max-sm:text-xl">Contact Us</h2>
        <fieldset className="items-center">
            <legend className="p-1 max-sm:-mr-10">
            <label htmlFor="name" className="p-2 max-sm:text-xs max-sm:text-center">Name:</label>
            <br />
            <input type="text" className="rounded-md max-sm:h-5 max-sm:w-10 " placeholder="Enter your name" />
            </legend>
            <br />
            <legend className="p-1">
            <label htmlFor="email" className="p-2 max-sm:text-xs max-sm:text-center" >Email:</label>
            <br />
            <input type="email" className="rounded-md max-sm:h-5 max-sm:w-10" placeholder="Enter your Email" />
            </legend>
            <br />
            <legend className="p-1">
                <label htmlFor="" className="p-2 max-sm:text-xs max-sm:text-center" >Any Qustion?</label>
                <br className="hidden "/>
                <textarea name="textArea" id="textArea" placeholder=" Any Question?" className="p-4 rounded-lg resize-none max-sm:h-5 max-sm:w-10"></textarea>
            </legend>
            <button type="button" className="h-7 w-20 border-2 rounded-md text-black bg-card">Submit</button>
        </fieldset>
        </div>
       
</div>
        
        </form>
        
    )
}