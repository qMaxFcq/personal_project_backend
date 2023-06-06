module.exports = (sequelize, DataTypes) => {
  const Statuscustomer = sequelize.define(
    "Statuscustomer",
    {
      statusName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
      timestamps: false,
    }
  );

  Statuscustomer.associate = (models) => {
    Statuscustomer.hasMany(models.Customer, {
      foreignKey: {
        name: "statusId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Statuscustomer;
};
