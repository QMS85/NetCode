function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        return (
            <header data-name="header" className="bg-white shadow-sm fixed w-full top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div data-name="logo" className="flex items-center">
                            <a href="#" onClick={() => navigate('home')} className="text-2xl font-bold text-blue-600">
                                NetCode
                            </a>
                        </div>

                        <nav data-name="desktop-nav" className="hidden md:flex items-center space-x-8">
                            <a href="#" onClick={() => navigate('home')} className="text-gray-700 hover:text-blue-600">Home</a>
                            <a href="#" onClick={() => navigate('services')} className="text-gray-700 hover:text-blue-600">Services</a>
                            <a href="#" onClick={() => navigate('about')} className="text-gray-700 hover:text-blue-600">About</a>
                            <a href="#" onClick={() => navigate('portfolio')} className="text-gray-700 hover:text-blue-600">Portfolio</a>
                            <a href="#" onClick={() => navigate('contact')} className="text-gray-700 hover:text-blue-600">Contact</a>
                        </nav>

                        <button data-name="mobile-menu-button" className="md:hidden" onClick={toggleMenu}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <nav data-name="mobile-nav" className="md:hidden py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#" onClick={() => { navigate('home'); toggleMenu(); }} className="text-gray-700 hover:text-blue-600">Home</a>
                                <a href="#" onClick={() => { navigate('services'); toggleMenu(); }} className="text-gray-700 hover:text-blue-600">Services</a>
                                <a href="#" onClick={() => { navigate('about'); toggleMenu(); }} className="text-gray-700 hover:text-blue-600">About</a>
                                <a href="#" onClick={() => { navigate('portfolio'); toggleMenu(); }} className="text-gray-700 hover:text-blue-600">Portfolio</a>
                                <a href="#" onClick={() => { navigate('contact'); toggleMenu(); }} className="text-gray-700 hover:text-blue-600">Contact</a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
