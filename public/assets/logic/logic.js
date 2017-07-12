$(document).ready(() => {
	$("#portfoliobox").hide();
	$("#contactbox").hide();

	$("#goabout").on("click",()=>{
		$("#portfoliobox").hide();
		$("#contactbox").hide();
		$("#aboutbox").show();

		$("#homelogo").html("get to know me.");
	})

	$("#goportfolio").on("click",()=>{
		$("#aboutbox").hide();
		$("#contactbox").hide();
		$("#portfoliobox").show();

		$("#homelogo").html("portfolio.");
	})

	$("#gocontact").on("click", ()=>{
		$("#aboutbox").hide();
		$("#portfoliobox").hide();
		$("#contactbox").show();

		$("#homelogo").html("connect with me.");
	})

	$("#ctcform").on("submit", (event)=> {
		event.preventDefault();
		var name = $("#ctcname").val().trim();
		var email = $("#ctcemail").val().trim();
		var msg = $("#ctcmsg").val().trim();

		console.log(name,email,msg)
	})
})
