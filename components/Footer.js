function Footer() {
    try {
        const socialLinks = [
            { icon: 'fab fa-whatsapp', url: 'https://wa.me/yourwhatsappnumber', label: 'WhatsApp' },
            { icon: 'fab fa-facebook', url: 'https://facebook.com/netcode', label: 'Facebook' },
            { icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/netcode', label: 'LinkedIn' },
            { icon: 'fab fa-twitter', url: 'https://twitter.com/netcode', label: 'Twitter' },
            { icon: 'fab fa-github', url: 'https://github.com/netcode', label: 'GitHub' },
            { icon: 'fab fa-instagram', url: 'https://instagram.com/netcode', label: 'Instagram' }
        ];

        return (
            <footer data-name="footer" className="bg-gray-900 text-white pt-12 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="company-info">
                            <h3 className="text-xl font-bold mb-4">NetCode</h3>
                            <p className="text-gray-400">
                                Leading South African software development company specializing in Marketing, Health & Financial Services solutions.
                            </p>
                        </div>
                        
                        <div data-name="quick-links">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" onClick={() => navigate('services')} className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#" onClick={() => navigate('about')} className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" onClick={() => navigate('portfolio')} className="text-gray-400 hover:text-white">Portfolio</a></li>
                                <li><a href="#" onClick={() => navigate('contact')} className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="contact-info">
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><i className="fas fa-map-marker-alt mr-2"></i>Johannesburg, South Africa</li>
                                <li><i className="fas fa-phone mr-2"></i>+27 XX XXX XXXX</li>
                                <li><i className="fas fa-envelope mr-2"></i>info@netcode.co.za</li>
                            </ul>
                        </div>
                        
                        <div data-name="social-links">
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white text-xl"
                                        aria-label={link.label}
                                    >
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div data-name="footer-bottom" className="border-t border-gray-800 mt-8 pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} NetCode. All rights reserved.
                            </p>
                            <div className="mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white text-sm mx-2">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm mx-2">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
