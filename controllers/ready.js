const ready = () => {
    try {
        console.log('Client is ready');
    } catch (error) {
        console.error(error);
    }
}

module.exports = { ready };