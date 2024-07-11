'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // Define payment based on order placed
      Payment.belongsTo(models.Booking, {
        foreignKey: 'order_id',
        as: 'order'
      });
    }
  }
  Payment.init({
    order_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};