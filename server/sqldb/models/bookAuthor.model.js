module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BookAuthor', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  });
};
