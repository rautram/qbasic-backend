/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('questionresponse', {
		questionresponseid: {
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
		response: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		questionresponseby: {
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
		tableName: 'questionresponse'
	});
};
