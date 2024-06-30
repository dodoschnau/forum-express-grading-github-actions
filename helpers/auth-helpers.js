const getUser = req => {
  return req.user || null
}

const ensureAuthenticated = (req, res, next) => {
  return req.isAuthenticated()
}

module.exports = {
  getUser,
  ensureAuthenticated
}
