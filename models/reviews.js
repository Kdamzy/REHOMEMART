'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Define review of the User
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      // Define association with Car
      Review.belongsTo(models.Car, {
        foreignKey: 'items_id',
        as: 'items'
      });
    }
  }
  Review.init({
    user_id: DataTypes.INTEGER,
    items_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Review;
};
