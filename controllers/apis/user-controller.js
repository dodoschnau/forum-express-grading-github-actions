const userServices = require('../../services/user-service')
const jwt = require('jsonwebtoken')

const userController = {
  signUp: (req, res, next) => {
    userServices.signUp(req, res, next, (err, data) => {
      if (err) return next(err)
      const createdUser = data.user.toJSON()
      delete createdUser.password // 因安全問題使用者密碼不應該回傳前端，因此刪除密碼
      return res.json({ status: 'success', data: createdUser })
    })
  },
  signIn: (req, res, next) => {
    try {
      const userData = req.user.toJSON()
      delete userData.password // 因安全問題使用者密碼不應該回傳前端，因此刪除密碼
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' }) // 簽發 JWT，效期 30 天
      res.json({
        status: 'success',
        data: {
          token,
          user: userData
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = userController
