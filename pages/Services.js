function Services() {
    try {
        const services = [
            {
                icon: "fas fa-bullhorn",
                title: "Marketing Solutions",
                description: "Custom software solutions for digital marketing, campaign management, and analytics."
            },
            {
                icon: "fas fa-heartbeat",
                title: "Healthcare Systems",
                description: "Electronic health records, patient management, and medical billing solutions."
            },
            {
                icon: "fas fa-chart-line",
                title: "Financial Services",
                description: "Banking software, payment processing, and financial management systems."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile Development",
                description: "Cross-platform mobile applications for iOS and Android devices."
            },
            {
                icon: "fas fa-cloud",
                title: "Cloud Solutions",
                description: "Cloud-native applications and migration services."
            },
            {
                icon: "fas fa-shield-alt",
                title: "Security Services",
                description: "Cybersecurity solutions and secure software development."
            }
        ];

        return (
            <div data-name="services-page" className="pt-20">
                <section className="bg-blue-600 text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl max-w-2xl">
                            We deliver cutting-edge software solutions tailored to your industry needs.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Development Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-blue-600 font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-semibold mb-2">Discovery</h3>
                                <p className="text-gray-600">Understanding your requirements</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-blue-600 font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-semibold mb-2">Planning</h3>
                                <p className="text-gray-600">Designing the solution</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-blue-600 font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-semibold mb-2">Development</h3>
                                <p className="text-gray-600">Building your solution</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-blue-600 font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-semibold mb-2">Delivery</h3>
                                <p className="text-gray-600">Testing and deployment</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Services page error:', error);
        reportError(error);
        return null;
    }
}
