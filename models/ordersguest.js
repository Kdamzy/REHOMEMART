'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingGuest extends Model {
    static associate(models) {
      // define guest that place order
    }
  }
  BookingGuest.init({
    num_guests: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderguest',
  });
  return orderguest;
};
