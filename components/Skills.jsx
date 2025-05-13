'use client';

function Skills() {
    return (
        <section id="skills" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Check Out My</p>
                <h1 className="text-5xl font-bold text-center mb-10">Skills</h1>
                
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Technical Skills</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">Python</p>
                                <p className="text-gray-600 text-sm">Advanced</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">TensorFlow</p>
                                <p className="text-gray-600 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">PyTorch</p>
                                <p className="text-gray-600 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">SQL</p>
                                <p className="text-gray-600 text-sm">Advanced</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">Scikit-learn</p>
                                <p className="text-gray-600 text-sm">Advanced</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">Pandas</p>
                                <p className="text-gray-600 text-sm">Advanced</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Additional Skills</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">Git</p>
                                <p className="text-gray-600 text-sm">Advanced</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">Docker</p>
                                <p className="text-gray-600 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">AWS</p>
                                <p className="text-gray-600 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">JavaScript</p>
                                <p className="text-gray-600 text-sm">Basic</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">React</p>
                                <p className="text-gray-600 text-sm">Basic</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                <p className="font-medium">Tableau</p>
                                <p className="text-gray-600 text-sm">Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;