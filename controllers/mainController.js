const path = require('path');

const mainController = {
    home: (req, res) => {
        let homePath = path.join(__dirname, '../views/home.html');
        res.sendFile(homePath);
    },
    about: (req, res) => {
        let aboutPath = path.join(__dirname, '../views/about.html');
        res.sendFile(aboutPath);
    }
};

module.exports = mainController;