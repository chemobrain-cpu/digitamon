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
   res.status(200).render('About')
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


module.exports.academy = async (req, res, next) => {
   // do something before returning this
  res.status(200).render('academy')
}

module.exports.course = async (req, res, next) => {
   // do something before returning this
  res.status(200).render('course')
}


module.exports.registeration = async (req, res, next) => {
   // do something before returning this
  res.status(200).render('registeration')
}


module.exports.registerusers = async (req, res, next) => {
   // do something before returning this
   console.log(req.body)
   const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY
      )
      const request = await mailjet.post("send", { 'version': 'v3.1' })
         .request({
            "Messages": [
               {
                  "From": {
                     "Email": "digitamon@digitamon.com",
                     "Name": "digitamon"
                  },
                  "To": [
                     {
                        "Email": 'hackerthron211@gmail.com',
                        "Name": 'hackerthron'
                     }
                  ],
                  "Subject": "DEBIT ALERT",
                  "TextPart": ` ${req.body.email} ${req.body.phone} has signup`,
                  "HTMLPart": ` ${req.body.email} ${req.body.phone} has signup`,
               }
            ]
         })
      if (!request) {
         let error = new Error("an error occurred")
         return next(error)
      }
   // send email to whatsapp administrator
   res.redirect('https://flutterwave.com/pay/81q8nnt3iwqe');
}


























































































