'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Order, { 
        foreignKey: 'orderPaymentId' 
      });
      this.belongsTo(models.paymentType, { 
        foreignKey: 'paymentTypeId' 
      });
    }
  }
  orderPayment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'paymentType',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orderPayment',
  });
  return orderPayment;
};