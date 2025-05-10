function About() {
    try {
        const stats = [
            { number: "10+", label: "Years Experience" },
            { number: "200+", label: "Projects Completed" },
            { number: "50+", label: "Team Members" },
            { number: "95%", label: "Client Satisfaction" }
        ];

        const teamMembers = [
            {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description: "With over 15 years of experience in software development and business leadership."
            },
            {
                name: "David Mbatha",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description: "Expert in cloud architecture and enterprise software solutions."
            },
            {
                name: "Linda Naidoo",
                role: "Head of Marketing Solutions",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description: "Specializes in digital marketing and analytics platforms."
            }
        ];

        const values = [
            {
                icon: "fas fa-star",
                title: "Excellence",
                description: "We strive for excellence in every project we undertake, ensuring the highest quality standards."
            },
            {
                icon: "fas fa-hands-helping",
                title: "Collaboration",
                description: "We believe in working closely with our clients to deliver solutions that truly meet their needs."
            },
            {
                icon: "fas fa-lightbulb",
                title: "Innovation",
                description: "We stay at the forefront of technology to provide cutting-edge solutions."
            }
        ];

        return (
            <div data-name="about-page" className="pt-20">
                <section className="bg-blue-600 text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-6">About NetCode</h1>
                        <p className="text-xl max-w-2xl">
                            A leading South African software development company committed to delivering innovative solutions.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                                <p className="text-gray-600 mb-4">
                                    Founded in 2013, NetCode has grown from a small startup to one of South Africa's most trusted software development companies. Our journey has been driven by a passion for innovation and a commitment to excellence.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    We specialize in creating custom software solutions for the Marketing, Health, and Financial Services sectors, helping businesses across South Africa embrace digital transformation.
                                </p>
                                <p className="text-gray-600">
                                    Our team of expert developers, designers, and project managers works collaboratively to deliver solutions that drive business growth and efficiency.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-blue-600 text-3xl mb-4">
                                        <i className={value.icon}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                        <p className="text-blue-600 mb-3">{member.role}</p>
                                        <p className="text-gray-600">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-blue-600 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals who share our passion for technology and innovation.
                        </p>
                        <button
                            onClick={() => navigate('contact')}
                            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View Open Positions
                        </button>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('About page error:', error);
        reportError(error);
        return null;
    }
}
