const adminControllers = {
  getRestaurants: (req, res) => {
    return res.render('admin/restaurants')
  }
}

module.exports = adminControllers
