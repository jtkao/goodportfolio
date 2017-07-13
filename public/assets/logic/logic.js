$(document).ready(() => {
	// navigation
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

	// message
	$("#ctcform").on("submit", (event)=> {
		event.preventDefault();
		var name = $("#ctcname").val().trim();
		var email = $("#ctcemail").val().trim();
		var msg = $("#ctcmsg").val().trim();

		var holler = {
			"name": name,
			"email": email,
			"msg": msg
		}

		console.log(name,email,msg)

		$.ajax({
            url: "/message",
            method: 'POST',
            data: holler
        }).then(()=>{
        	$("#ctcname").val("")
        	$("#ctcemail").val("")
        	$("#ctcmsg").val("")

    		$("#contactbox").hide();
    		$("#aboutbox").show();
    		$("#homelogo").html("thanks for reaching out, " + name + "! talk to you soon.")
        })
	})
})
