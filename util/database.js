const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://Zu8Hc7dE5w:IbOqmd9C3j@remotemysql.com:3306/Zu8Hc7dE5w",
  {
    host: "remotemysql.com",
    dialect: "mysql",
    port: 3306,
    define: {
      timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
  }
);

module.exports = sequelize;
