const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://sghSHRzC1o:iE6sLNC5wr@remotemysql.com:3306/sghSHRzC1o",
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
