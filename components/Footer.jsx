function Footer() {
    return (
        <footer className="py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <nav className="flex flex-col items-center">
                    <ul className="flex flex-wrap justify-center gap-6 mb-4 text-2xl">
                        <li>
                            <a href="/#about" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    About
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#experience" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Experience
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#skills" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Skills
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#projects" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Projects
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Contact
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-500">Copyright &copy; {new Date().getFullYear()} Bryan Herdianto. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;