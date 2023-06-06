module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customerID: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      dateOrder: {
        type: DataTypes.DATE,
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
  Customer.associate = (models) => {
    Customer.belongsTo(models.User, {
      foreignKey: {
        name: "userName",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Shopname, {
      foreignKey: {
        name: "shopID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Phonerec, {
      foreignKey: {
        name: "phoneRecID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Typeorder, {
      foreignKey: {
        name: "typeID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Statuscustomer, {
      foreignKey: {
        name: "statusID",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return Customer;
};
