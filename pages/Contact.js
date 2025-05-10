function Contact() {
    try {
        const contactInfo = [
            {
                icon: "fas fa-map-marker-alt",
                title: "Visit Us",
                content: "123 Innovation Drive, Sandton, Johannesburg, South Africa"
            },
            {
                icon: "fas fa-phone",
                title: "Call Us",
                content: "+27 XX XXX XXXX"
            },
            {
                icon: "fas fa-envelope",
                title: "Email Us",
                content: "info@netcode.co.za"
            }
        ];

        return (
            <div data-name="contact-page" className="pt-20">
                <section className="bg-blue-600 text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl max-w-2xl">
                            Get in touch with us to discuss your project or learn more about our services.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-info-card">
                                    <div className="contact-icon">
                                        <i className={info.icon}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                                    <p className="text-gray-600">{info.content}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
                        <p className="text-gray-600 mb-8">
                            Follow us on social media to stay updated with our latest news and projects.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="https://wa.me/yourwhatsappnumber" className="text-2xl text-gray-600 hover:text-green-500">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://facebook.com/netcode" className="text-2xl text-gray-600 hover:text-blue-600">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://linkedin.com/company/netcode" className="text-2xl text-gray-600 hover:text-blue-700">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/netcode" className="text-2xl text-gray-600 hover:text-blue-400">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com/netcode" className="text-2xl text-gray-600 hover:text-pink-600">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Contact page error:', error);
        reportError(error);
        return null;
    }
}
