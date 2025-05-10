function ContactForm() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const [status, setStatus] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setStatus('sending');
            
            // Simulate form submission
            setTimeout(() => {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            }, 1500);
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <form data-name="contact-form" onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    {status === 'sending' ? (
                        <span><i className="fas fa-spinner fa-spin mr-2"></i>Sending...</span>
                    ) : 'Send Message'}
                </button>

                {status === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                        <i className="fas fa-check-circle mr-2"></i>
                        Message sent successfully!
                    </div>
                )}
            </form>
        );
    } catch (error) {
        console.error('ContactForm component error:', error);
        reportError(error);
        return null;
    }
}
