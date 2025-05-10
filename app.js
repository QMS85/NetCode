function App() {
    try {
        React.useEffect(() => {
            navigate('home');
        }, []);

        return <div id="app"></div>;
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
