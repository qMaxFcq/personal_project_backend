module.exports = (sequelize, DataTypes) => {
  const Typeorder = sequelize.define(
    "Typeorder",
    {
      typeOrder: {
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

  Typeorder.associate = (models) => {
    Typeorder.hasMany(models.Customer, {
      foreignKey: {
        name: "typeId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Typeorder;
};
