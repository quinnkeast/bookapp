module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Book', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    language: {
      type: DataTypes.STRING
    }
  });
};
