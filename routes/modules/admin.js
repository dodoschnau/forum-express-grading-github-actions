const express = require('express')
const router = express.Router()

const adminControllers = require('../../controllers/admin-controllers')

router.get('/restaurants', adminControllers.getRestaurants)
router.get('/restaurants/create', adminControllers.createRestaurant)
router.get('/restaurants/:id', adminControllers.getRestaurant)
router.post('/restaurants', adminControllers.postRestaurants)

router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
