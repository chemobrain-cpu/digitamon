const express = require("express")
const router = express.Router()

let home = require("../controller/client").home
let services = require("../controller/client").services
let about= require("../controller/client").about
let portfolios = require("../controller/client").portfolios
let portfolio = require("../controller/client").portfolio
let blogs = require("../controller/client").blogs
let blog = require("../controller/client").blog
let contact = require("../controller/client").contact


router.get('/', home)
router.get('/services',services)
router.get('/about', about)
router.get('/portfolio',portfolios)
router.get('/portfolio/:id',portfolio)
router.get('/blogs',blogs)
router.get('/blogs/:id',blog)
router.get('/contact',contact)

exports.router = router