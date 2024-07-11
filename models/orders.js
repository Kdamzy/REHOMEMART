'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      // Define order with respective User
      order.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      // Define association with Car
      order.belongsTo(models.items, {
        foreignKey: 'items_id',
        as: 'items'
      });

      // Define association with Payment
      order.hasOne(models.Payment, {
        foreignKey: 'order_id',
        as: 'payment'
      });
    }
  }
  order.init({
    user_id: DataTypes.INTEGER,
    items_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    total_price: DataTypes.DECIMAL,
    total_hours: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pending'
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
    modelName: 'order',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return order;
};
