module.exports = function(sequelize, Datatypes) {
	var Message = sequelize.define("Message", {
		name: {
			type: Datatypes.TEXT,
			allowNull: false,
			validate: {
                len: [1]
            }
		},

		email: {
			type: Datatypes.TEXT,
			allowNull: false,
			validate: {
                len: [1],
                isEmail: true
            }
		},

		text: {
			type: Datatypes.TEXT,
			allowNull: false,
			validate: {
                len: [1]
            }
		}
	});

	return Message;
}