function ServiceCard({ icon, title, description }) {
    try {
        return (
            <div data-name="service-card" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl text-blue-600 mb-4">
                    <i className={icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        );
    } catch (error) {
        console.error('ServiceCard component error:', error);
        reportError(error);
        return null;
    }
}
