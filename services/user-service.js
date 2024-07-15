const { User } = require('../models')

const bcrypt = require('bcryptjs')

const userController = {
  signUp: (req, res, next, cb) => {
    if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')

    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) throw new Error('Email already exists!')
        return bcrypt.hash(req.body.password, 10)
      })
      .then(hash => User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })
      )
      .then(signUpUser => cb(null, { user: signUpUser }))
      .catch(err => next(err))
  }
}

module.exports = userController
