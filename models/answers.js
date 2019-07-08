/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('answers', {
		answerid: {
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
		answer: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		answerby: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: 'user',
				key: 'userid'
			}
		},
		answerat: {
			type: DataTypes.DATE,
			allowNull: false
		},
		modifiedat: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'answers'
	});
};
