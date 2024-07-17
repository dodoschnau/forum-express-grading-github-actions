const adminServices = require('../../services/admin-service')

const adminController = {
  getRestaurants: (req, res, next) => {
    adminServices.getRestaurants(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  postRestaurants: (req, res, next) => {
    adminServices.postRestaurants(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  deleteRestaurant: (req, res, next) => {
    adminServices.deleteRestaurant(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  createRestaurant: (req, res, next) => {
    adminServices.createRestaurant(req, (err, data) => {
      if (err) return next(err)

      const defaultData = {
        ...data,
        name: '',
        tel: '02-1234-5678',
        address: '',
        openingHours: '上午 09:00',
        description: '請輸入餐廳描述',
        image: null
      }

      return res.json({ status: 'success', data: defaultData })
    }

    )
  }
}

module.exports = adminController
