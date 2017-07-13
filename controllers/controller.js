var db = require("../models")

module.exports = function(app) {
	app.get("/", (req, res) =>{
		res.render("home")
	})

	app.post("/message", (req,res)=>{
		console.log(req.body);

		db.Message.create({
			text: req.body.msg,
			email: req.body.email,
			name: req.body.name
		}).then(()=>{
			res.end();
		})
	})
}