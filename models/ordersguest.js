'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderguest extends Model {
    static associate(models) {
      // define guest that place order
    }
  }
  orderguest.init({
    num_guests: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderguest',
  });
  return orderguest;
};
