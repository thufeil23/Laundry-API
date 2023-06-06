'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, { 
        through: 'User_Role', 
        foreignKey: 'userId' 
      });
      this.belongsToMany(models.User, { 
        through: 'User_Role', 
        foreignKey: 'roleId' 
      });
    }
  }
  userRoles.init({
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
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Role',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
  }, {
    sequelize,
    modelName: 'userRoles',
  });
  return userRoles;
};