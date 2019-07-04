var SequelizeAuto = require("sequelize-auto");
var auto = new SequelizeAuto("zntMPWelx3", "zntMPWelx3", "tkHMgb1v4r", {
  host: "remotemysql.com",
  dialect: "mysql",
  port: 3306
});

auto.run(function(err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
