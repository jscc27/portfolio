
var express = require('express');
var router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' });
}

