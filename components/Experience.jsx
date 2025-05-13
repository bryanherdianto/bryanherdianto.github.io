'use client';

function Experience() {
    return (
        <section id="experience" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Explore My</p>
                <h1 className="text-5xl font-bold text-center mb-10">Experience</h1>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-gray-300 pl-4">
                                <h3 className="text-xl font-semibold">University of Indonesia</h3>
                                <p className="text-gray-600 mb-1">Bachelor of Computer Engineering</p>
                                <p className="text-gray-500 text-sm">2021 - Present</p>
                                <p className="text-gray-700 mt-2">GPA: 3.75/4.00</p>
                            </div>
                            <div className="border-l-4 border-gray-300 pl-4">
                                <h3 className="text-xl font-semibold">SMA Negeri 1 Tangerang</h3>
                                <p className="text-gray-600 mb-1">High School Diploma, Science</p>
                                <p className="text-gray-500 text-sm">2018 - 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md flex-1">
                        <h2 className="text-2xl font-bold text-center mb-6">Work Experience</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-gray-300 pl-4">
                                <h3 className="text-xl font-semibold">Data Scientist</h3>
                                <p className="text-gray-600 mb-1">Startup Company</p>
                                <p className="text-gray-500 text-sm">June 2023 - Present</p>
                                <ul className="list-disc ml-4 mt-2 text-gray-700">
                                    <li>Developed machine learning models for predictive analytics</li>
                                    <li>Implemented data visualization dashboards using Python and Tableau</li>
                                    <li>Conducted A/B testing to optimize user engagement</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-gray-300 pl-4">
                                <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
                                <p className="text-gray-600 mb-1">Tech Corporation</p>
                                <p className="text-gray-500 text-sm">Jan 2023 - May 2023</p>
                                <ul className="list-disc ml-4 mt-2 text-gray-700">
                                    <li>Assisted in building and training neural networks</li>
                                    <li>Conducted data preprocessing and feature engineering</li>
                                    <li>Contributed to research papers on computer vision</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;