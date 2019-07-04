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
		createdat: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		modifiedon: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'questionresponse'
	});
};
