const express = require('express')
const router = express.Router()

const adminControllers = require('../../controllers/admin-controller')
const upload = require('../../middleware/multer')

router.get('/restaurants/create', adminControllers.createRestaurant)
router.get('/restaurants/:id/edit', adminControllers.editRestaurant)
router.get('/restaurants/:id', adminControllers.getRestaurant)
router.put('/restaurants/:id', upload.single('image'), adminControllers.putRestaurant)
router.delete('/restaurants/:id', adminControllers.deleteRestaurant)
router.get('/restaurants', adminControllers.getRestaurants)
router.post('/restaurants', upload.single('image'), adminControllers.postRestaurants)

router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
