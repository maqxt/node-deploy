module.exports = (sequelize, DataTypes) => {
    var Grimlins = sequelize.define('Grimlins', {
      username: DataTypes.STRING
    });
  
    return Grimlins;
  };