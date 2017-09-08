module.exports = (server) => {
    server.get('/customers', (req, res) => {
        res.send({ "kundenr": 643345, "navn": "Rasmus Jessen" });
    });
};