'use client';

import { useEffect, useState } from 'react';

function Projects({ project }) {
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        // Import mixitup from CDN since we want to keep using it as-is
        const script = document.createElement('script');
        script.src = '/mixitup.min.js';
        script.async = true;
        script.onload = initMixItUp;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initMixItUp = () => {
        if (typeof window !== 'undefined' && window.mixitup) {
            const mixer = window.mixitup('.projects_container', {
                selectors: {
                    target: '.project_item'
                },
                animation: {
                    duration: 300
                }
            });
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <section id="projects" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <p className="text-xl text-gray-600 text-center mb-2">Browse My Recent</p>
                <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <button
                        className={`py-2 px-4 rounded-md transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        data-filter="all"
                        onClick={() => handleCategoryClick('all')}
                    >
                        All
                    </button>
                    <button
                        className={`py-2 px-4 rounded-md transition-all ${activeCategory === 'ml' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        data-filter=".ml"
                        onClick={() => handleCategoryClick('ml')}
                    >
                        Machine Learning
                    </button>
                    <button
                        className={`py-2 px-4 rounded-md transition-all ${activeCategory === 'web' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        data-filter=".web"
                        onClick={() => handleCategoryClick('web')}
                    >
                        Web Development
                    </button>
                    <button
                        className={`py-2 px-4 rounded-md transition-all ${activeCategory === 'data' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        data-filter=".data"
                        onClick={() => handleCategoryClick('data')}
                    >
                        Data Analysis
                    </button>
                </div>

                <div className="projects_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project && project.map((proj, index) => (
                        <div key={index} className={`project_item ${proj.category} bg-white rounded-lg overflow-hidden shadow-md flex flex-col`}>
                            <img src={proj.image.url} alt={proj.name} className="w-full h-48 object-cover" />
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
                                <span className="text-gray-600 mb-4 flex-grow">{proj.shortDescription}</span>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                                    <div className="flex space-x-3 items-center">
                                        <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                                            <img src="/github.png" alt="GitHub" className="w-5 h-5 hover:opacity-75" />
                                        </a>
                                        <a href={proj.deploymentLink} target="_blank" rel="noopener noreferrer" title="Live Demo/Share">
                                            <img src="/globe.svg" alt="Share/Live Demo" className="w-5 h-5 hover:opacity-75" />
                                        </a>
                                    </div>
                                    <a href={`/${proj.slug}`} className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                                        Read more &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;