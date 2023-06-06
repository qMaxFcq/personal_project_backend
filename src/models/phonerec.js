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
      timestamps: false,
    }
  );

  Phonerec.associate = (models) => {
    Phonerec.hasMany(models.Customer, {
      foreignKey: {
        name: "phoneRecid",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Phonerec;
};
