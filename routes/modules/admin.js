const express = require('express')
const router = express.Router()

const adminControllers = require('../../controllers/admin-controllers')
const { authenticatedAdmin } = require('../../middleware/auth')

router.get('/restaurants', authenticatedAdmin, adminControllers.getRestaurants)

router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
