/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('answerreport', {
		answerreportid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		answerid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: 'answers',
				key: 'answerid'
			}
		},
		reportanswer: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		answerreportby: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: 'user',
				key: 'userid'
			}
		},
		answerreporton: {
			type: DataTypes.DATE,
			allowNull: false
		},
		answerreportmofifiedon: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'answerreport'
	});
};
