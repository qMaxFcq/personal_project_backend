module.exports = (sequelize, DataTypes) => {
  const Shopname = sequelize.define(
    "Shopname",
    {
      shopName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );

  Shopname.associate = (models) => {
    Shopname.hasMany(models.Customer, {
      foreignKey: {
        name: "shopID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Shopname;
};
