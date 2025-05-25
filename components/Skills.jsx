function Skills({ skill }) {
    return (
        <section id="skills" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Check Out My</p>
                <h1 className="text-5xl font-bold text-center mb-10">Skills</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {skill.map((block, index) => (
                        <div key={index} className="flex-1 bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-center mb-6">{block.title}</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {block.skillComponent.map((skill, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <img src="/checkmark.png" alt="Checkmark" className="w-7 h-7 mb-2" />
                                        <p className="font-medium text-center">{skill.name}</p>
                                        <p className="text-gray-600 text-sm">{skill.level}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;