/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('questionreport', {
		questionreportid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		questionid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: 'question',
				key: 'questionid'
			}
		},
		report: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		reportby: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: 'user',
				key: 'userid'
			}
		},
		createdat: {
			type: DataTypes.DATE,
			allowNull: false
		},
		modifiedat: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'questionreport'
	});
};
