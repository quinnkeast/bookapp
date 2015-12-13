module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Request', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'waiting'
    }
  });
};
