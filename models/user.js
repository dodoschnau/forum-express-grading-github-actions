'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      User.hasMany(models.Comment, { foreignKey: 'userId' })
      User.belongsToMany(models.Restaurant, {
        through: models.Favorite,
        foreignKey: 'userId',
        as: 'FavoritedRestaurants'
      })
      User.belongsToMany(models.Restaurant, {
        through: models.Like,
        foreignKey: 'userId',
        as: 'LikedRestaurants'
      })
      User.belongsToMany(models.User, {
        through: models.Followship,
        foreignKey: 'followingId',
        as: 'Followers'
        // 『找出這個使用者的追蹤者、被我追蹤的人 Followers 』
        // 這個使用者被這些使用者追蹤（Followers），可以從"followingId"得知
      })
      User.belongsToMany(models.User, {
        through: models.Followship,
        foreignKey: 'followerId',
        as: 'Followings'
        // 『找出這個使用者的正在追蹤的人、我追蹤的人 Followings 』
        // 這個使用者正在追蹤哪些使用者(Followings)，可以從"followerId"得知
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true
  })
  return User
}
