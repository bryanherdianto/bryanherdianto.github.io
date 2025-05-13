'use client';

function Footer() {
    return (
        <footer className="py-10 px-6">
            <div className="max-w-6xl mx-auto">
                    <nav className="flex flex-col items-center">
                        <ul className="flex flex-wrap justify-center gap-6 mb-4 text-2xl">
                            <li>
                                <a href="#about" className="text-black hover:text-gray-500 hover:underline hover:underline-offset-[1rem] hover:decoration-gray-500 transition-colors">About</a>
                            </li>
                            <li>
                                <a href="#experience" className="text-black hover:text-gray-500 hover:underline hover:underline-offset-[1rem] hover:decoration-gray-500 transition-colors">Experience</a>
                            </li>
                            <li>
                                <a href="#skills" className="text-black hover:text-gray-500 hover:underline hover:underline-offset-[1rem] hover:decoration-gray-500 transition-colors">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-black hover:text-gray-500 hover:underline hover:underline-offset-[1rem] hover:decoration-gray-500 transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-black hover:text-gray-500 hover:underline hover:underline-offset-[1rem] hover:decoration-gray-500 transition-colors">Contact</a>
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