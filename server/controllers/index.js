// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-29


var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About Me', displayName: req.user ? req.user.displayName : ''  });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects', displayName: req.user ? req.user.displayName : ''  });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : ''  });
}

module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/login',
            {
                title: 'Login',
                messages: req.flash('loginMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
    }
    else {
        return res.redirect('/');
    }

}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.redirect('/contact-list');
            });

        })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
    }
    else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error inserting new user");
            if (err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error: USer already exists!'
                );
                console.log('Error: User already exists!')
            }
            return res.render('auth/register',
                {
                    title: 'Register',
                    messages: req.flash('registerMessage'),
                    displayName: req.user ? req.user.displayName : ''
                });
        }
        else{
            
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list')
            });
        }
    })
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}
