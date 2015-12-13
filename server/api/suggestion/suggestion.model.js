module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Suggestion', {
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
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'en',
    }
  });
};
