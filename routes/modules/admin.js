const express = require('express')
const router = express.Router()

const adminControllers = require('../../controllers/admin-controllers')

router.get('/restaurants/create', adminControllers.createRestaurant)
router.get('/restaurants/:id/edit', adminControllers.editRestaurant)
router.get('/restaurants/:id', adminControllers.getRestaurant)
router.put('/restaurants/:id', adminControllers.putRestaurant)
router.delete('/restaurants/:id', adminControllers.deleteRestaurant)
router.get('/restaurants', adminControllers.getRestaurants)
router.post('/restaurants', adminControllers.postRestaurants)

router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
