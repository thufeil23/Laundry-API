'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Order, { 
        otherKey: 'orderId'  
      });
      this.belongsTo(models.laundryType, { 
        foreignKey: 'laundryTypeId' 
      });
    }
  }
  orderDetail.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    laundryTypeId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    modelName: 'orderDetail',
  });
  return orderDetail;
};