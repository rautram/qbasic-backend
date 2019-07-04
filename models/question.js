/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('question', {
		questionid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		userid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: 'user',
				key: 'userid'
			}
		},
		question: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createdat: {
			type: DataTypes.DATE,
			allowNull: true
		},
		modifiedon: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'question'
	});
};
