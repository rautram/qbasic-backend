/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		userid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		device_id: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true
		},
		valid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		phonenumber: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		modifiedon: {
			type: DataTypes.DATE,
			allowNull: true
		},
		image: {
			type: DataTypes.STRING(60),
			allowNull: true
		}
	}, {
		tableName: 'user'
	});
};
