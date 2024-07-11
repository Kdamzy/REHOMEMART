'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    static associate(models) {
      // Define association with Booking
      items.hasMany(models.Booking, {
        foreignKey: 'items_id',
        as: 'orders'
      });

      // Define association with Category
      items.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      });

      // Define association with User
      items.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  items.init({
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    color: {
      type: DataTypes.STRING,
      defaultValue: 'black'
    },
    img: {
      type: DataTypes.STRING,
    },
    price: DataTypes.DECIMAL,
    category_id: DataTypes.INTEGER,
    location: {
      type: DataTypes.STRING,
      defaultValue: '9, Ogunsola street'
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: 'Lagos'
    },
    condition: {
      type: DataTypes.STRING,
      defaultValue: 'Good'
    },
    user_id: DataTypes.INTEGER,
    numReviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
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
    modelName: 'items',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
  });
  return items;
};
