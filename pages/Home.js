function Home() {
    try {
        return (
            <div data-name="home-page">
                <section data-name="hero" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Transforming Ideas into Powerful Software Solutions
                            </h1>
                            <p className="text-xl mb-8">
                                South Africa's leading software development company specializing in Marketing, Health & Financial Services solutions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => navigate('contact')} className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                                    Get Started
                                </button>
                                <button onClick={() => navigate('portfolio')} className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                    View Our Work
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-name="features" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NetCode?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-code text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Expert Development</h3>
                                <p className="text-gray-600">Industry-leading development practices and cutting-edge technologies.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-users text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
                                <p className="text-gray-600">Dedicated to understanding and meeting your unique business needs.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-rocket text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                                <p className="text-gray-600">Efficient development process ensuring timely project completion.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-name="cta" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help bring your vision to life.</p>
                        <button onClick={() => navigate('contact')} className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                            Contact Us Today
                        </button>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
