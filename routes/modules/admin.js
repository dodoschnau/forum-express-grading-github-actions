const express = require('express')
const router = express.Router()

const adminControllers = require('../../controllers/admin-controllers')

router.get('/restaurants', adminControllers.getRestaurants)

router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
