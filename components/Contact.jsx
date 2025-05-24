function Contact() {
    return (
        <section id="contact" className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Get in Touch</p>
                <h1 className="text-5xl font-bold text-center mb-10">Contact Me</h1>

                <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-white rounded-lg shadow-md p-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <img src="/email.png" alt="Email icon" className="w-10 h-10" />
                        <a href="mailto:bryan.herdianto17@gmail.com" className="block text-md sm:text-xl text-black no-underline hover:text-gray-500 group transition duration-300">
                            <span className="relative">
                                bryan.herdianto17@gmail.com
                                <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </span>
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <img src="/whatsapp.png" alt="WhatsApp icon" className="w-8 h-8" />
                        <a href="https://api.whatsapp.com/send?phone=628558866900&text=Hello!" className="block text-md sm:text-xl text-black no-underline hover:text-gray-500 group transition duration-300">
                            <span className="relative">
                                +62 855-8866-900
                                <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;