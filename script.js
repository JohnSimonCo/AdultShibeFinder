function button_press() {	
	//Finding objects
	var dogject = document.getElementById("doge_chat");
	var text_box = document.getElementById("doge_input");
	
	//Getting user text
	var doge_text = text_box.value;
	
	//Generating doge response array
	var dogesponse = [
		"wow so interesting", 
		"very good message", 
		"such response", 
		"dont hate the doge, hate the game", 
		"want 2 b president", 
		"hail the doge", 
		"shibe b much smart", 
		"so super duper fly hoe", 
		"just wow", 
		"snoop doge would be dissapoint", 
		"doge > cate", 
		"very good response", 
		"much interesting talking to you",
		"pls luv doge", 
		"such webpage", 
		"very good conversation", 
		"wow", "woff", 
		"im a doge, woff woof", 
		"if our eyes aren't real then how can many mirrors be real", 
		"many booty much hoe", "dis is santa, how can i many help?", 
		"dogecoin #tothemoon naow", 
		"adult shibe finder is looking for single shibes", 
		"shibe b super duper fly", 
		"let the shibe flow through you", 
		"i see no god up here, only shibe", 
		"that moment i swore we were shibe"
	];
	

	//Setting up predefined answers
	user_text = doge_text.toLowerCase();
	
	/*var matchText = function(text, answer) {
		return function(userText) {
			if(userText === text) return answer;
		}
	}

	var responses = [
		matchText('hi', 'hey')
	];
	shibe_response = responses[0](user_text);
	if(response) break;

	switch(user_text) {
		case 'hi' || 'hey':
		return'hey'
		break;
	}*/



	if (user_text == "hi") {
		shibe_response = "hey";
	} else if (user_text == "i love you") {
		shibe_response = "i luv u 2";
	} else if (user_text == "i doge you") {
		shibe_response = "wow id fuck you such hard";
	} else if (user_text == "hey") {
		shibe_response = "hey";
	} else if (user_text.indexOf("my name is") !== -1) {
		shibe_response = "such care";
	} else if (user_text.indexOf("gay") !== -1) {
		shibe_response = "doge is gay";
	} else if (user_text.indexOf("fag") !== -1) {
		shibe_response = "doge is such fag";
	} else if (user_text.indexOf("hate") !== -1) {
		shibe_response = "i hat u";
	} else if (user_text.indexOf("how are you") !== -1) {
		shibe_response = "such good";
	} else if (user_text.indexOf("what does the doge say") !== -1) {
		shibe_response = "wow";
	} else if (user_text.indexOf("would you fuck me") !== -1) {
		shibe_response = "yes. just yes";
	} else if (user_text.indexOf("whats up") !== -1) {
		shibe_response = "the sky";
	} else if (user_text.indexOf("what's up") !== -1) {
		shibe_response = "the sky";
	} else if (user_text.indexOf("goodbye") !== -1) {
		shibe_response = "dont liv me pls";
	} else if (user_text.indexOf("good bye") !== -1) {2
		shibe_response = "dont liv me pls";
	} else if (user_text.indexOf("bye") !== -1) {
		shibe_response = "dont liv me pls";
	} else if (user_text.indexOf("simon") !== -1) {
		shibe_response = "simon is such best doge";
	} else if (user_text.indexOf("agge") !== -1) {
		shibe_response = "he sux";
	} else if (user_text.indexOf("sale") !== -1) {
		shibe_response = "doge anus is not for sale";
	} else if (user_text.indexOf("who is") !== -1) {
		shibe_response = "is doge";
	} else if (user_text.indexOf("who are") !== -1) {
		shibe_response = "is doge";
	} else if (user_text.indexOf("what do you think") !== -1) {
		shibe_response = "such shit";
	} else if (user_text.indexOf("html") !== -1) {
		shibe_response = "yo mama";
	} else if (user_text.indexOf("erika") !== -1) {
		shibe_response = "erika is good doge";
	}  else if (user_text.indexOf("maxi") !== -1) {
		shibe_response = "maxi is bad doge";
	}  else if (user_text.indexOf("sex") !== -1) {
		shibe_response = "lez make luv <3";
	}  else if (user_text.indexOf("grown man naked") !== -1) {
		shibe_response = "yes, in very turkish prison";
	}  else if (user_text.indexOf("filip") !== -1) {
		shibe_response = "filip is very elevator doge";
	}  else if (user_text.indexOf("where do you live") !== -1) {
		shibe_response = "ur mailbox nub";
	}  else if (user_text.indexOf("hump") !== -1) {
		shibe_response = "did you say hump? wow can i hump ur leg pls";
	}  else if (user_text.indexOf("because") !== -1) {
		shibe_response = "why?";
	}  else if (user_text.indexOf("hi") !== -1) {
		shibe_response = "hey";
	}  else if (user_text.indexOf("hey") !== -1) {
		shibe_response = "yo";
	}  else if (user_text.indexOf("hello") !== -1) {
		shibe_response = "wazzup?";
	}  else if (user_text.indexOf("why") !== -1) {
		shibe_response = "because";
	}  else if (user_text.indexOf("adult shibe finder") !== -1) {
		shibe_response = "hot doges looking for friends";
	}  else if (user_text.indexOf("phone") !== -1) {
		shibe_response = "always have my phone on such vibrate";
	}  else if (user_text.indexOf("music") !== -1) {
		shibe_response = "dogestep";
	}  else if (user_text.indexOf("friends") !== -1) {
		shibe_response = "all friends are shibes";
	}  else if (user_text.indexOf("whats your name") !== -1) {
		shibe_response = "dogemon";
	}  else if (user_text.indexOf("favourite movie") !== -1) {
		shibe_response = "pirates of the shibe";
	}  else if (user_text.indexOf("dick") !== -1) {
		shibe_response = "luv da dick?";
	}  else if (user_text.indexOf("penis") !== -1) {
		shibe_response = "luv da penis?";
	}  else if (user_text.indexOf("cock") !== -1) {
		shibe_response = "luv da cock?";
	}  else if (user_text.indexOf("yes") !== -1) {
		shibe_response = "no fucktard";
	}  else if (user_text.indexOf("how old are you") !== -1) {
		shibe_response = "much old";
	}  else if (user_text.indexOf("how are you") !== -1) {
		shibe_response = "such fine";
	}  else if (user_text.indexOf("how big is you") !== -1) {
		shibe_response = "much big";
	}  else if (user_text.indexOf("how big are you") !== -1) {
		shibe_response = "much big";
	}  else if (user_text.indexOf("how tall are you") !== -1) {
		shibe_response = "very tall";
	}  else if (user_text.indexOf("parents") !== -1) {
		shibe_response = "much kill all my parents";
	}  else if (user_text.indexOf("childhood") !== -1) {
		shibe_response = "wow such trublesome childhood";
	}  else if (user_text.indexOf("power cord") !== -1) {
		shibe_response = "such power";
	}  else if (user_text.indexOf("what day is it") !== -1) {
		shibe_response = "today";
	}  else if (user_text.indexOf("haha") !== -1) {
		shibe_response = "youre the only shibe laughing fucktard";
	}  else if (user_text.indexOf("lol") !== -1) {
		shibe_response = "youre the only shibe laughing fucktard";
	}  else if (user_text.indexOf("show me your tits") !== -1) {
		shibe_response = "such flash";
	}  else if (user_text.indexOf("cookie") !== -1) {
		shibe_response = "many cookie give";
	}  else if (user_text.indexOf("do you work") !== -1) {
		shibe_response = "much not work";
	}  else if (user_text.indexOf("do you watch tv") !== -1) {
		shibe_response = "tv is fur cates";
	}  else if (user_text.indexOf("cate") !== -1) {
		shibe_response = "fuck da cate";
	}  else if (user_text.indexOf("gangster") !== -1) {
		shibe_response = "such shibe gangster";
	}  else if (user_text.indexOf("bondage") !== -1) {
		shibe_response = "much #bondage2014 for live";
	}  else if (user_text.indexOf("headphones") !== -1) {
		shibe_response = "need to take a leak";
	}  else if (user_text.indexOf("what teacher") !== -1) {
		shibe_response = "such anki";
	}  else if (user_text.indexOf("halvdansson") !== -1) {
		shibe_response = "hail da much creator";
	}  else if (user_text.indexOf("sublime text") !== -1) {
		shibe_response = "many best ide";
	}  else if (user_text.indexOf("intel") !== -1) {
		shibe_response = "doge inside";
	}  else if (user_text.indexOf("flappy bird") !== -1) {
		shibe_response = "flappy doge is hard";
	}  else if (user_text.indexOf("is hard") !== -1) {
		shibe_response = "doge is hard";
	}  else if (user_text.indexOf("vogue") !== -1) {
		shibe_response = "dogue";
	}  else if (user_text.indexOf("arnold") !== -1) {
		shibe_response = "arnold shibeneger";
	}  else if (user_text.indexOf("snoop dog") !== -1) {
		shibe_response = "snoop doge";
	}  else if (user_text.indexOf("snoop lion") !== -1) {
		shibe_response = "snoop doge";
	}  else if (user_text.indexOf("wanna fuck") !== -1) {
		shibe_response = "yes very yes";
	}  else if (user_text.indexOf("you want french fries") !== -1) {
		shibe_response = "go fuck dogeself";
	}  else if (user_text.indexOf("html") !== -1) {
		shibe_response = "very html";
	}  else if (user_text.indexOf("reddit") !== -1) {
		shibe_response = "much reddit all day";
	}  else if (user_text.indexOf("supershibe") !== -1) {
		shibe_response = "such shibe hail the doge";
	}  else if (user_text.indexOf("/r/") !== -1) {
		shibe_response = "such subreddit madness";
	}  else if (user_text.indexOf("love letter") !== -1) {
		shibe_response = "many love letter";
	}  else if (user_text.indexOf("fan in the background") !== -1) {
		shibe_response = "you can put such many fan in my wowground";
	}  else if (user_text.indexOf("dog ") !== -1) {
		shibe_response = "its wow doge!";
	}  else if (user_text.indexOf("javascript") !== -1) {
		shibe_response = "very jQuery";
	}  else if (user_text.indexOf("how cool are you") !== -1) {
		shibe_response = "2 cool 4 school";
	}  else if (user_text.indexOf("are you my dad") !== -1) {
		shibe_response = "shibe is very father of everything";
	}  else if (user_text.indexOf("drumstep") !== -1) {
		shibe_response = "shibestep";
	}  else if (user_text.indexOf("glitch hop") !== -1) {
		shibe_response = "glitch wow";
	}  else if (user_text.indexOf("titanic") !== -1) {
		shibe_response = "very leonardo dicaprio doge";
	}  else if (user_text.indexOf("leonardo dicaprio") !== -1) {
		shibe_response = "dogetanic here we come";
	}  else if (user_text.indexOf("www.") !== -1) {
		shibe_response = "many not like website";
	}  else if (user_text.indexOf("facebook") !== -1) {
		shibe_response = "dogebook";
	}  else if (user_text.indexOf("twitter") !== -1) {
		shibe_response = "there's no doge version of twitter :(";
	}  else if (user_text.indexOf("cpu") !== -1) {
		shibe_response = "Chick Penis U";
	}  else if (user_text.indexOf("gpu") !== -1) {
		shibe_response = "Good Penis U";
	}  else if (user_text.indexOf("ram") !== -1) {
		shibe_response = "Random Acces Many wow";
	}  else if (user_text.indexOf("arial") !== -1) {
		shibe_response = "many font";
	}  else if (user_text.indexOf("google") !== -1) {
		shibe_response = "hail lord mathias";
	}  else if (user_text.indexOf("android") !== -1) {
		shibe_response = "/r/androidcirclejerk is home";
	}  else if (user_text.indexOf("have family") !== -1) {
		shibe_response = "woof many family";
	}  else if (user_text.indexOf("chocolate") !== -1) {
		shibe_response = "gotta get dat kakao";
	}  else if (user_text.indexOf("dogecoin") !== -1) {
		shibe_response = "#tothemoon";
	}  else if (user_text.indexOf("#tothemoon") !== -1) {
		shibe_response = "many dogecoin i have";
	}  else if (user_text.indexOf("how you doin") !== -1) {
		shibe_response = "such good";
	}  else if (user_text.indexOf("girlfriend") !== -1) {
		shibe_response = "hey hey you you i could be your many girlfriend";
	}  else if (user_text.indexOf("nexus") !== -1) {
		shibe_response = "very bright beautiful nexus";
	}  else if (user_text.indexOf("monstercat") !== -1) {
		shibe_response = "monstercate is the only good cate";
	}  else if (user_text.indexOf("perks of being a wallflower") !== -1) {
		shibe_response = "and in that moment i swore we were shibe";
	}  else if (user_text.indexOf("who are you doing") !== -1) {
		shibe_response = "wow ur mom";
	}  else if (user_text.indexOf("spotify") !== -1) {
		shibe_response = "many shibeify";
	}  else if (user_text.indexOf("google") !== -1) {
		shibe_response = "get to that google choppa";
	}  else if (user_text.indexOf("/wtf") !== -1) {
		shibe_response = "check out /r/sexwithdogs";
	}  else if (user_text.indexOf("strip") !== -1) {
		shibe_response = "many strip for you";


	} else {
		//Selecting random response from dogesponse array
		var shibe_response = dogesponse[getRandomNumber(dogesponse)];
	}
	
	//Reset text_box
	text_box.value = "";
	setInputFocus();
		
	//Entire doge typing and post function
	if (doge_text != "") {
	
		$(dogject).append( "You: " + doge_text + "<br/>");
		
		//Defining and starting intervals only to be used one time, more effective than setTimeout()
		
		var interval = setInterval(function(){
			//Doge is writing
			doge_is_writing(dogject);
			window.clearInterval(interval);
		},600);
		
		var interval2 = setInterval(function(){
			//Post and hide writing status
			post(doge_text, dogject, shibe_response);
			
			//Show only placeholder
			var typing_status = document.getElementById("shibe_type");
			$(typing_status).hide();
			
			var typing_status_placeholder = document.getElementById("shibe_type_placeholder");
			$(typing_status_placeholder ).show();

			window.clearInterval(interval2);
		},2000);
	}
}

function doge_is_writing(dogject) {
	var typing_status = document.getElementById("shibe_type");
	$(typing_status).show();
	
	var typing_status_placeholder = document.getElementById("shibe_type_placeholder");
	$(typing_status_placeholder ).hide();
	
	//$(dogject).append('<div id="shibe_type">Shibe is typing...</div>');
	dogject.scrollTop = 9999999;
}

function post(doge_text, dogject, shibe_response) {
	//Append the text and post
	if (doge_text != "") {
		$(dogject).append( "Shibe: " + shibe_response + "<br/>");
	}
	
	//Scroll to bottom of div, 9999999 is offset from top
	dogject.scrollTop = 9999999;
}

function getRandomNumber(array) {
	//array.length makes it easy to continue later
	return Math.floor(Math.random() * array.length) + 0;
}

function setInputFocus() {
	//Request focus for text box, used at init and efter post
	document.getElementById("doge_input").focus();
}

function init() {

	//Hide typing and show placeholder
	var typing_status = document.getElementById("shibe_type");
	$(typing_status).hide();
	
	var typing_status_placeholder = document.getElementById("shibe_type_placeholder");
	$(typing_status_placeholder ).show();
	
	//Hook up enter keypress function
	setInputFocus();
	$(document).keypress(function(e) {
    if (e.which == "13") { 
        button_press();
    }     
});
}