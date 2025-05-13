'use client';

function About() {
    return (
        <section id="about" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Get to Know More</p>
                <h1 className="text-5xl font-bold text-center mb-10">About Me</h1>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex justify-center items-start">
                        <img src="/about-pic.jpg" alt="Profile picture" className="w-[300px] h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex flex-col items-center">
                                    <img src="/experience.png" alt="Experience icon" className="w-10 h-10 mb-3" />
                                    <h3 className="font-bold text-xl mb-2">Experience</h3>
                                    <p className="text-gray-700">2+ years</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex flex-col items-center">
                                    <img src="/briefcase.png" alt="Education icon" className="w-10 h-10 mb-3" />
                                    <h3 className="font-bold text-xl mb-2">Completed</h3>
                                    <p className="text-gray-700">50+ projects</p>
                                </div>
                            </div>
                        </div>
                            <p className="text-gray-700 text-justify">
                                I'm a student at the University of Indonesia studying <strong>Computer
                                Engineering</strong>. I'm a <strong>quick learner</strong> and <strong>open-minded</strong> when 
                                it comes to technology. I enjoy taking on <strong>challenging</strong> projects 
                                that push my abilities to the max. I'm looking forward to
                                connecting with <strong>like-minded individuals</strong> as I explore the exciting
                                world of tech and tackle new opportunities.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;