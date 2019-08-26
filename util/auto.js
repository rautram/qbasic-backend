var SequelizeAuto = require("sequelize-auto");
var auto = new SequelizeAuto("Zu8Hc7dE5w", "Zu8Hc7dE5w", "IbOqmd9C3j", {
  host: "remotemysql.com",
  dialect: "mysql",
  port: 3306
});

auto.run(function(err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
