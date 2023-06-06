module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customerId: {
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
      orderDetail: {
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
  Customer.associate = (models) => {
    Customer.belongsTo(models.Admin, {
      foreignKey: {
        name: "adminId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Shopname, {
      foreignKey: {
        name: "shopId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Phonerec, {
      foreignKey: {
        name: "phonerecId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Typeorder, {
      foreignKey: {
        name: "typeId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Customer.belongsTo(models.Statuscustomer, {
      foreignKey: {
        name: "statusId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return Customer;
};
