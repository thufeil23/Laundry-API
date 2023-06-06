'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { 
        foreignKey: 'userId' 
      });
      this.hasOne(models.orderDetail, { 
        otherKey: 'orderId' 
      });
      this.hasOne(models.orderStatus, { 
        foreignKey: 'orderStatusId' 
      });
      this.hasOne(models.orderPayment, { 
        foreignKey: 'orderPaymentId' 
      });
    }
  }
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    orderStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orderStatus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    orderPaymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orderPayment',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};