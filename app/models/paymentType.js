'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.orderPayment, { 
        foreignKey: 'paymentTypeId' 
      });
    }
  }
  PaymentType.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paymentType',
  });
  return PaymentType;
};