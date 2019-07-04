const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://zntMPWelx3:tkHMgb1v4r@remotemysql.com:3306/zntMPWelx3",
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
