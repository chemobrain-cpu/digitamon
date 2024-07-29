const express = require("express")
const Mailjet = require('node-mailjet')
let request = require('request');
const random_number = require("random-number")



const { welcomeTemplate, fundTemplate, withdrawTemplate } = require('../utiils/util');
const { History, Cossignment } = require("../database/databaseConfig");

module.exports.home = async (req, res, next) => {
   res.status(200).render('home')
}
module.exports.services = async (req, res, next) => {
   res.status(200).render('services')
}
module.exports.about = async (req, res, next) => {
   res.status(200).render('about')
}
module.exports.portfolios = async (req, res, next) => {
      // do something before returning this
   res.status(200).render('portfolio')
}
module.exports.portfolio = async (req, res, next) => {
   // do something before returning this
   res.status(200).render('portfolio-single')
}

module.exports.blogs = async (req, res, next) => {
    // do something before returning this
   res.status(200).render('blogs')
}


module.exports.blog = async (req, res, next) => {
    // do something before returning this
   res.status(200).render('blog')
}


module.exports.contact = async (req, res, next) => {
   // do something before returning this
  res.status(200).render('contact')
}

























































































