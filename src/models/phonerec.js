module.exports = (sequelize, DataTypes) => {
  const Phonerec = sequelize.define(
    "Phonerec",
    {
      phoneName: {
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

  Phonerec.associate = (models) => {
    Phonerec.hasMany(models.Customer, {
      foreignKey: {
        name: "phoneRecID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Phonerec;
};
