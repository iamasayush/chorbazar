import { images } from "../images/images";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
};

return (
    <div className="h-screen flex justify-center lg:items-center">
        <div className="flex flex-col lg:justify-center lg:items-center p-10 space-y-24  lg:text-3xl lg:h-[60%] lg:w-[50%] lg:shadow-2xl lg:bg-yellow-100">
            <div className="space-y-2 ">

                <div className="flex lg:items-center gap-3">
                    <img 
                        src={images.whatsapp} 
                        alt="WhatsApp" className="w-6 h-6" 
                    />
                    
                    <strong>Phone:</strong>
                    
                    <a 
                        href="tel:+918959420701"
                        rel="noreferrer"
                        className="text-blue-500 
                        
                        hover:underline"
                    >
                        
                        +91-8959420701
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <img   
                        src={images.gmail} 
                        alt="Gmail" className="w-6 h-6" 
                    />

                    <strong>Email:</strong>

                    <a 
                        href="mailto:iamasayushdwivedi@gmail.com"
                        rel="noreferrer"
                        className="text-blue-500 
                        hover:underline"
                    >
                        iamasayushdwivedi@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <img 
                        src={images.github} alt="GitHub" 
                        className="w-6 h-6" 
                    />

                    <strong>GitHub:</strong>

                    <a 
                        href="https://github.com/iamasayush" 
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 
                        hover:underline"
                    >
                        github.com/iamasayush
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <img 
                        src={images.linkedin} 
                        alt="LinkedIn" className="w-6 h-6" 
                    />

                    <strong>LinkedIn:</strong>

                    <a
                        href="https://linkedin.com/in/ayush-dwivedi-913242250/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 
                        hover:underline"
                    >
                        linkedin.com/in/ayush-dwivedi-913242250
                    </a>
                </div>

            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        id="userName"
                        placeholder="Your Name"
                        required
                        className="w-full p-2 border rounded"
                    />

                    <textarea
                        id="userMessage"
                        placeholder="Your Message or Suggestion"
                        required
                        className="w-full p-2 border rounded h-32"
                    />

                    <button type="submit"
                        className="hover:bg-blue-600 
                        bg-blue-500 text-white px-4 py-2 
                        rounded-3xl">
                        Send Message
                    </button>

                </form>

            </div>
        </div>
    </div>
  );
};
