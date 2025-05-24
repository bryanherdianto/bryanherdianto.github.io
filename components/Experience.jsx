function Experience({ experienceEducation, experienceWork }) {
    return (
        <section id="experience" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Explore My</p>
                <h1 className="text-5xl font-bold text-center mb-10">Experience</h1>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
                        <div className="space-y-6">
                            {experienceEducation.map((edu, index) => (
                                <div key={index} className="border-l-4 border-gray-300 pl-4">
                                    <h3 className="text-xl font-semibold">{edu.universityName}</h3>
                                    <p className="text-gray-600 mb-1">{edu.major}</p>
                                    <p className="text-gray-500 text-sm">{edu.date}</p>
                                    <p className="text-gray-700 mt-2">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-bold text-center mb-6">Work Experience</h2>
                        <div className="space-y-6">
                            {experienceWork.map((work, idx) => (
                                <div key={idx} className="border-l-4 border-gray-300 pl-4 mb-8">
                                    <h3 className="text-xl font-semibold">{work.workPosition}</h3>
                                    <p className="text-gray-600 mb-1">{work.companyName}</p>
                                    <p className="text-gray-500 text-sm">{work.date}</p>
                                    <ul className="list-disc ml-4 mt-2 text-gray-700">
                                        {work.description.map((bullet, i) => (
                                            <li key={i}>{bullet.bulletPoint}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;