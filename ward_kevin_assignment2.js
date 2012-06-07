/*  Author: Kevin Ward
	Date: 6-6-2012
	Name: Deliverable 2
	Theme: Puggle Rampage!
*/
// alert("JavaScript works!");
// Say function for space saving code power!
var say = function(message) { console.log(message); };

// Variables
var puggleRam = "\"Puggle Rampage!\"";
var cuteLevel1 = "\"Isn\'t she so cute?\"";
var cuteLevel2 = "\"She\'s so CUTE!!!\"";
var howManyDogs = 2;
var toRam1 = true;
var toRam2 = true;
var wifeJoins = false;
var laugh = "\"Bwaahaahaa, Ur missing ur face!\"";

// Output of variables to make sure they work.
say(puggleRam);
say(cuteLevel1);
say(cuteLevel2);
say(howManyDogs);
say(toRam1);
say(toRam2);
say(wifeJoins);
say(laugh);

// My Story in code.
say("\"My wife and I have " + howManyDogs + " cute dogs.\"");
say("\"One is a boy Chihuahua, the other is a female Puggle.\"");
say("\"They are both so cute, but the Puggle can get really hyper.\"");
say("\"If one of us teases her too much she\'ll start whining and get all hyper.\"");
say("\"She\'ll move around a lot, wagging her tail and jumping on up on us.\"");
say("\"We like to call it the " + puggleRam + "\"");
say("\*I choose to tease the Puggle by saying, " + cuteLevel1 + " and " + cuteLevel2 + "\"");
say("\*I also wag my head back and forth, while whining back at her.\*");
if (toRam1 === true) {
	say("\*She gets upset and hyper and she bites my face off!\*");
} else {
	say("\*The Puggle ignores it this time and we have furry snuggles.\*");
};

if (toRam2 === true){
	say("\*The Chihuahua wants to join in and help bite my face off.\*");
	if (howManyDogs > 1) {
		say(puggleRam);
	} else {
		say(cuteLevel1);
	};
} else {
	say("\*The Chihuahua looks on, ignores us, and just leaves it to the Puggle.\*");
	if (wifeJoins === true) {
		say("\*My wife joins in instead and teases the Puggle, by saying " + cuteLevel1 + "\*");
	} else {
		say("\*My wife just looks at us and laughs saying\* " + laugh);
	};
};
say("\"The End!\"");


/*
Puggle Rampage!!!

Me and my wife have 2 cute dogs. One is a boy Chihuahua mix, and the other is a 
female Puggle. Like I said they are both cute, but the Puggle can get really hyper. 
If one of us teases her too much she'll start whining and get all hyper and move 
around a lot, wagging her tail and jumping up on one of us. We like to call it the 
Puggle Rampage! How we tease her is to say "Isn't she so cute?" and to whine back 
at her, while moving my head side to side. She hates that, but it's so cute. So one 
day I choose to tease the Puggle. She can either not get annoyed and we can have 
furry hugs, or get really hyper and try to bite my face off. What's really fun is 
if our Chihuahua gets in the mix, then we have 2 dogs getting hyper and playing with 
each other. He could either just mind his own business and just lay around, or he 
could join the mix and also try to bite my face off! Then we have a Puggle Rampage!

* to tease the puggle or not?
	* I tease the Puggle
	* I don't tease the Puggle
* Will the Chihuahua join in?
	* Chihuahua bites face off
	* Chihuahua leaves it to the Puggle
*My wife wants to join in the Puggle rampage
	* She joins and they bite both our faces off
	* She stays back and laughs at my missing face
*/