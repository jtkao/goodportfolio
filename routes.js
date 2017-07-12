module.exports = function(app) {
	app.get("/", (req, res) =>{
		res.render("home")
	})

	app.get("/portfolio", (req,res)=>{
		res.render("portfolio")
	})
}