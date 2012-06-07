/*  Author: Kevin Ward
	Date: 6-6-2012
	Name: Deliverable 2
	Theme: Puggle Rampage!
*/
// alert("JavaScript works!");
// Say function for space saving code power!
var say = function(message) { console.log(message); };

// Variables
var backStory = function () { 
				say("\"My wife Katt and I have " + howManyDogs + " cute dogs.\"");
				say("\"One is a boy Chihuahua, the other is a female Puggle.\"");
				say("\"They are both so cute, but the Puggle can get really hyper.\"");
				say("\"If one of us teases her too much she\'ll start whining and get all hyper.\"");
				say("\"She\'ll move around a lot, wagging her tail and jumping up on us.\"");
				say("\"We like to call it the " + puggleRam + "\"");
};
var puggleRam = "\"Puggle Rampage!\"";
var cuteLevel1 = "\"Isn\'t she so cute?\"";
var cuteLevel2 = "\"She\'s so CUTE!!!\"";
var howManyDogs = 2;
var teaseTime = true;
var toRam1 = true;
var toyType = "plushie"; // "plushie" or "tug rope"
var plushTypes = ["Dragon" , "Fox"];
var tugRopeTypes = ["Green and Black" , "Red and Yellow"];
var plushAvail = [ "sounds" , "doesn\'t sound" ];
var tugRopeAvail = [ "is" , "isn\'t" ];
var myFace = 10;
var toRam2 = true;
var wifeJoins = false;
var laugh = "\"Bwaahaahaa, Ur missing ur face!\"";
var storeNames = [ "GameStop", "Walmart", "Bookman\'s", "Harkin\'s" ],
	minPerStore = [ 15, 10, 20, 90 ];
	
// Argument Function
// How long should I tease the Puggle?
// Done
var teaseTime = function (teasingTime) {
	aWhile = true;
	if (teasingTime === aWhile) {
		say("\"Hey Katt, how long should I tease her for?\"");
		say("\*Katt says.\* \"I\'d say about 10 minutes today.\"");
	}
	else {
		say("\"I shouldn\'t tease her for very long, should I?\"");
		say("\*Katt says.\* \"Maybe only for 10 seconds.\"");
	}
	return;
};

// Double Argument Function
// What should I tease her with?
// Done
var toyTeasing = function (pronoun , teaseToy) {
	if ( toyType === "plushie" ) {
		say("\"" + pronoun + " thinking of using a " + teaseToy 
		+ " to tease the Puggle with instead of my face!\"");
		say("I look around for the " + toyType + ".");
	} else {
		say("\"" + pronoun + " wanting to tease her with a " + teaseToy + "!\"");
		say("I look around and find the " + toyType + ".");
	};
};

// Double String Function
// What kind of toy do I use of that type?
// Done
var funToys = function (toyType) {
	if ( toyType === "plushie" ){
		for (var i = 0, j = plushTypes.length; i < j; i++) {
			say( "The " + plushTypes[i] + " plushie, " + plushAvail[i] + " good." );
		};
	} else {
		for (var i = 0, j = tugRopeTypes.length; i < j; i++) {
			say( "The " + tugRopeTypes[i] + " tug rope, " + tugRopeAvail[i] + " around here." );
		};
	};
};

// While-Loop Function
// The Puggle is biting my face off little by little.
// Done
var biting = function () {
	while (myFace > 0) {
		say( "\"" + myFace + " inches of flesh are left on my face! Oh NOES!!!\"" );
		myFace--;
	};
	say( "\"I have no more face left!!!\"" );
	noFace = 0;
	return noFace;
};

// For-Loop Function
// Checking out stores after the Puggle Rampage!
// Done
var shopOneStore = function(storeName, minThisStore){
	say("\"So we check out " + storeName + " for "
		+ minThisStore + " minutes.\"");
	for (var minutes = 0; minutes < minThisStore; minutes += 5){
		var minRemain = minThisStore - minutes;
		say( "\"" + minutes + " have gone, " + minRemain + " left!\"" );
	};
	say( "\"We\'re done here at " + storeName + ", for now!\"" );
};

var goToStores = function(storeNames, minPerStore) {
	for (var storeNumber = 0; storeNumber < storeNames.length; storeNumber++){
		var storeName = storeNames[storeNumber],
			minThisStore = minPerStore[storeNumber];
		shopOneStore( storeName, minThisStore );
	};
};

// Output of variables to make sure they work.
/*
say(puggleRam);
say(cuteLevel1);
say(cuteLevel2);
say(howManyDogs);
say(toRam1);
say(toRam2);
say(wifeJoins);
say(laugh);
*/



// My Puggle Story in code.
backStory();
say("\*I choose to tease the Puggle by saying, " + cuteLevel1 + " and " + cuteLevel2 + "\"");
teaseTime(true);
say("\"Okay!\"");
say("\*I wag my head back and forth, while whining back at her.\*");
if (toRam1 === true) {
	say("\*She gets upset and hyper and she tries to bite my face off!\*");
} else {
	say("\*The Puggle ignores it this time and we have furry snuggles.\*");
};
toyTeasing("I\'m" , toyType);
funToys(toyType);
say("\*The Puggle is having fun with the " + toyType + ", so she avoids my face for the moment\*");
say("\*Oh noes!!! I spoke to soon!!! She starts to attack my face again!!!\*");
biting();
say("\*After the attack, I look in the mirror.\*");
say("\*I have " + noFace + " inches of flesh on my face left, darn!\*");
say("\"I guess I\'ll have to get plastic surgery then.\"");
say("\*The Chihuahua looks at us.\*");
if (toRam2 === true){
	say("\*The Chihuahua wants to join in and help bite my face off.\*");
	if (howManyDogs > 1 && wifeJoins === true) {
		say("\*My wife joins in and teases the Puggle, by saying " + cuteLevel1 + "\*");
		say(puggleRam);
	} else {
		say("\*Katt looks at me and laughs saying\* " + laugh);
	};
} else {
	say("\*The Chihuahua looks on, ignores us, and just leaves it to the Puggle.\*");
	if (wifeJoins === true) {
		say("\*Katt joins in instead and teases the Puggle, by saying " + cuteLevel1 + "\*");
	} else {
		say("\*Katt just looks at us and laughs saying\* " + laugh);
	};
};
say("\*At this point I\'m pretty tired and want to hang out at some shops.\*");
say("\*I ask my wife where she would want to go.\*");
say("\*Katt says.\* \"How about " + storeNames + "?\"");
say("\*I say.\* \"Sure, that sound\'s great\"");
goToStores(storeNames, minPerStore);
say("\"That was fun, let\'s do it again tomorrow!\"");
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
