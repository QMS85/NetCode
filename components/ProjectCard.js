function ProjectCard({ image, title, category, description }) {
    try {
        return (
            <div data-name="project-card" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-6">
                    <span className="text-blue-600 text-sm font-medium">{category}</span>
                    <h3 className="text-xl font-semibold mt-2">{title}</h3>
                    <p className="text-gray-600 mt-2">{description}</p>
                    <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProjectCard component error:', error);
        reportError(error);
        return null;
    }
}
