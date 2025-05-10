function Portfolio() {
    try {
        const [activeFilter, setActiveFilter] = React.useState('all');

        const projects = [
            {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Marketing Analytics Dashboard",
                category: "marketing",
                description: "Advanced analytics platform for digital marketing campaigns"
            },
            {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Healthcare Management System",
                category: "healthcare",
                description: "Comprehensive patient management solution"
            },
            {
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "FinTech Payment Platform",
                category: "finance",
                description: "Secure payment processing system"
            },
            {
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "E-commerce Analytics",
                category: "marketing",
                description: "Real-time sales and customer behavior analytics"
            },
            {
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Medical Records System",
                category: "healthcare",
                description: "Electronic health records management"
            },
            {
                image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Investment Platform",
                category: "finance",
                description: "Portfolio management and investment tracking"
            }
        ];

        const filteredProjects = activeFilter === 'all'
            ? projects
            : projects.filter(project => project.category === activeFilter);

        return (
            <div data-name="portfolio-page" className="pt-20">
                <section className="bg-blue-600 text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
                        <p className="text-xl max-w-2xl">
                            Explore our successful projects across various industries.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center mb-12">
                            <div className="portfolio-filter">
                                <button
                                    className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('all')}
                                >
                                    All Projects
                                </button>
                                <button
                                    className={`filter-button ${activeFilter === 'marketing' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('marketing')}
                                >
                                    Marketing
                                </button>
                                <button
                                    className={`filter-button ${activeFilter === 'healthcare' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('healthcare')}
                                >
                                    Healthcare
                                </button>
                                <button
                                    className={`filter-button ${activeFilter === 'finance' ? 'active' : ''}`}
                                    onClick={() => setActiveFilter('finance')}
                                >
                                    Finance
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    image={project.image}
                                    title={project.title}
                                    category={project.category}
                                    description={project.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-gray-600 mb-8">
                            Let's work together to bring your vision to life.
                        </p>
                        <button
                            onClick={() => navigate('contact')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Get in Touch
                        </button>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Portfolio page error:', error);
        reportError(error);
        return null;
    }
}
