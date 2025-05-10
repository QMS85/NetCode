function navigate(page) {
    try {
        const root = document.getElementById('root');
        const pages = {
            home: Home,
            services: Services,
            about: About,
            portfolio: Portfolio,
            contact: Contact
        };

        if (pages[page]) {
            const Component = pages[page];
            ReactDOM.render(
                <div>
                    <Header />
                    <Component />
                    <Footer />
                </div>,
                root
            );
            window.scrollTo(0, 0);
        }
    } catch (error) {
        console.error('Navigation error:', error);
        reportError(error);
    }
}
