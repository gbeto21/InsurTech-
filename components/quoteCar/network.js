const express = require('express')
const router = express.Router()
const controllerCreator = require("./controllerCreator")
const response = require('../response')

router.get('/', quoteCar)

function quoteCar(req, res, next) {

    let brand = req.query.brand
    let year = req.query.year
    let hasAC = (req.query.hasAC === 'true') ? true : false

    let data = controllerCreator.getQuoteCar(brand, year, hasAC)
    response.success(req, res, data, 200)

}

module.exports = router