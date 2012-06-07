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
var myFace = 30;
var toRam2 = true;
var wifeJoins = false;
var laugh = "\"Bwaahaahaa, Ur missing ur face!\"";



// Old Variables

var storeNames = [ "GameStop", "Walmart", "Bookman\'s", "Movie Theater" ],
	minPerStore = [ 50, 20, 30, 120 ];
var hoursLeft = 2;


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
		say("\"" + pronoun + " thinking of using a " + teaseToy + " to tease the Puggle with!\"");
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
// Not Done
var biting = function () {
	while (myFace > 0) {
		say( "\"" + myFace + " inches of flesh are leaving my face! Oh NOES!!!\"" );
		myFace--;
	};
	say( "\"I have no more face left!!!\"" );
	noFace = 0;
	return noFace;
};

// For-Loop Function
// Note about what it does.
// Not Done
var shopOneStore = function(storeName, minThisStore){
	say("\"Shopping at " + storeName + " for "
		+ minThisStore + " minutes.\"");
	for (var minutes = 0; minutes < minThisStore; minutes += 5){
		var minRemain = minThisStore - minutes;
		say( "\"" + minutes + " have past, " + minRemain + " left to go!\"" );
	};
	
	say( "\"I'm done with " + storeName + ", for now! *Snicker*\"" );
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
/* backStory()
say("\"My wife and I have " + howManyDogs + " cute dogs.\"");
say("\"One is a boy Chihuahua, the other is a female Puggle.\"");
say("\"They are both so cute, but the Puggle can get really hyper.\"");
say("\"If one of us teases her too much she\'ll start whining and get all hyper.\"");
say("\"She\'ll move around a lot, wagging her tail and jumping up on us.\"");
say("\"We like to call it the " + puggleRam + "\"");
*/

backStory();
say("\*I choose to tease the Puggle by saying, " + cuteLevel1 + " and " + cuteLevel2 + "\"");
teaseTime(true);
say("\*I also wag my head back and forth, while whining back at her.\*");
if (toRam1 === true) {
	say("\*She gets upset and hyper and she bites my face off!\*");
} else {
	say("\*The Puggle ignores it this time and we have furry snuggles.\*");
};
toyTeasing("I\'m" , toyType);
funToys(toyType);
say("\*The Puggle is having fun with the " + toyType + ", so she avoids my face for the moment\*");
say("\*Oh noes!!! I spoke to soon!!! She starts to attack my face again!!!\*");
biting();
say("\*After the attack, I look in the mirror.\*");
say("\*I have " + noFace + " inches of my face left, darn!\*");
say("\"I guess I\'ll have to get plastic surgery then.\"");

if (toRam2 === true){
	say("\*The Chihuahua wants to join in and help bite my face off.\*");
	if (howManyDogs > 1 && wifeJoins === true) {
		say("\*My wife joins in instead and teases the Puggle, by saying " + cuteLevel1 + "\*");
		say(puggleRam);
	} else {
		say("\*My wife just looks at us and laughs saying\* " + laugh);
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



// My Procrastination Adventure!

say("It\'s 10am, time to get on to my schoolwork for the week.");

say("I don\'t really feel up to it, so I make a decision to play my game console instead.");

// var gameTime = playTime(true);

say("Crap, it\'s really three o\'clock, I should get started on school.");

say("But, it can wait a couple more hours, so I decide to get something to eat.");

say("Oh but what to eat?");

say("I have pasta or hamburgers, hmmm.");

// toyTease("I\'m" , foodType);

// yumFood(foodType);

say("I eat up all the yumminess, and finally decide I\'m ready for the week\'s schoolwork.");

say("But now I only have a couple hours left in the day until it\'s due.");

say("What should I do?");

say("I sing a song to myself!");

// song();

say("A quick glance at my wallet confirms the song\'s truth...");

say("I have " + noCash + " cash in my wallet, darn!");

say("Okay, I think I\'m done singing for the week... Now what?");

say("There isn't much time left today. What to do now?");

say("Cram as much as I can in the hours I have left, or go Shopping?");

say("Number 2 sounds really good to me.");

goToStores(storeNames, minPerStore);

say("\"Now it's really late! I need to get some rest.\"");

say("The End!");



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



/*
var snoozeAlarm = true;
var foodType = "cereal"; // "cereal" or "ramen"
var cerealTypes = [ "Berry Crunch", "Honey Bunches of Oats" ];
var ramenTypes = [ "Tomato Ramen", "Soupy Ramen" ];
var cerealAvailable = [ "is", "is not" ];
var ramenAvailable = [ "is", "is" ];
var myMoney = 100; // I wish!
var storeNames = [ "GameStop", "Walmart", "Petco", "Petsmart" ],
	minPerStore = [ 50, 20, 30, 25 ];
	
// Say function to save space in the code.
var say = function(message) { console.log(message); };

// Argument Funtion
var snoozeAlarm = function (snooze) {
	annoyingMe = true;
	if (snooze === annoyingMe) {
		say( "\"Shut up you stupid bleeping alarm!\" " + "\*I snooze the alarm.\*" );
		say( "\*15 minutes later...\* " + "\"OK, I\'M UP! Happy now, alarm?\"" );
		say( "\*The alarm smirks\*" );
	}
	else {
		say( "\"Ok, ok, I\'ll get up now..." + "stupid alarm...\"" );
		say( "\*The alarm smirks\*" );
	}
	return;
};

// Double Argument Function
var feedMeSomething = function (pronoun, typeOfFood) {
	if ( foodType === "cereal" ) {
		say( "\"" + pronoun + " thinking of eating " + typeOfFood + "\"" );
	} else {
		say( "\"" + pronoun + " thinking of eating " + typeOfFood + "\"" );
	};
};

// Double String Function
var availableFood = function (foodType) {
	if ( foodType === "cereal" ){
		for (var i = 0, j = cerealTypes.length; i < j; i++) {
			say( "The cereal " + cerealTypes[i] + ", " + cerealAvailable[i] + " available." );
		};
	} else {
		for (var i = 0, j = ramenTypes.length; i < j; i++) {
			say( "The " + ramenTypes[i] + ", " + ramenAvailable[i] + " available." );
		};
	};
};

// While-Loop Function
var song = function () {
	while (myMoney > 0) {
		say( "\"" + myMoney + " dollars are fleeing my wallet.\"" );
		myMoney--;
	};
	say( "\"No more dollars in my wallet.\"" );
	noMoney = 0;
	return noMoney;
};

// For-Loop Function
var shopOneStore = function(storeName, minThisStore){
	say("\"Shopping at the " + storeName + " for "
		+ minThisStore + " minutes.\"");
	for (var minutes = 0; minutes < minThisStore; minutes += 5){
		var minRemain = minThisStore - minutes;
		say( "\"" + minutes + " have past, " + minRemain + " to go!\"" );
	};
	
	say( "\"I'm done with the store " + storeName + ", for now! BWAAA HAAA HAAA!!\"" );
};

var goToStores = function(storeNames, minPerStore) {
	for (var storeNumber = 0; storeNumber < storeNames.length; storeNumber++){
		var storeName = storeNames[storeNumber],
			minThisStore = minPerStore[storeNumber];
		shopOneStore( storeName, minThisStore );
	};
};

// The Start of My Morning Adventure
say( "\*I\'m sleeping soundly in bed, when the alarm starts to ring.\*" );
var gotAnnoyed = snoozeAlarm(true);

say( "\*I wake up and stub my big toe as I\'m walking to the bathroom.\*" );

say( "\*I wash my hands, then I walk to the kitchen to find something to eat.\*" );

say( "\*I ask to myself\* \"What should I eat for breakfast?\"" );

feedMeSomething("I\'m", foodType);

say( "\*I look around the kitchen to find some " + foodType + ".\*" );

availableFood(foodType);

say( "\*I eat the " + foodType + ".\*" );

say( "\*I\'m bored, so I sing myself a song.\*" );

song();

say( "\*I look in my wallet, and find that it's true\*" );
say( "\*I yell out!\*" + " \"I have " + noMoney + " dollars in my wallet!\"" );

say( "\"Well, I guess that means no going to the store for more milk and cookies...\"" );

say( "\"But that doesn't mean I can\'t window shop!!!\"" )

say( "\*So I hit the streets\*" );

goToStores(storeNames, minPerStore);

say( "\"The End! For Now! BWAA HAA HAA\"" );
*/



/*
var playTime = true;
var foodType = "hamburgers"; // "hamburgers" or "pasta"
var bunToppings = ["mayo, mustard, BBQ sauce, and cheese slices" , "ketchup, mustard, relish, and cheese slices"];
var pastaTypes = ["Chicken Alfredo" , "Spagetti"];
var condosAvail = [ "sound" , "don\'t sound" ];
var pastaAvail = [ "is" , "is" ];
var myCash = 25; // It should be more than just $25. *Sniff, sniff*
var storeNames = [ "GameStop", "Walmart", "Bookman\'s", "Movie Theater" ],
	minPerStore = [ 50, 20, 30, 120 ];
var hoursLeft = 2;

// Say function for space saving code power!
var say = function(message) { console.log(message); };

// My Happy Functions

// Argument Function
var playTime = function (playingTime) {
	longTime = true;
	if (playingTime === longTime) {
		say("How long should I play for?");
		say("I'd say about 5 hours today.");
	}
	else {
		say("I shouldn't play too long.");
		say("Maybe only for like 2 hours.");
	}
	return;
};

// Double Argument Function
var feedingTime = function (pronoun , typeOfYummies) {
	if ( foodType === "hamburgers" ) {
		say("\"" + pronoun + " wanting to eat " + typeOfYummies + "!\"");
		say("I search the kitchen for some " + foodType + ".");
		say("So I start grilling up some nice, juicy " + foodType + " in the kitchen.");
		say("What condiments should I slather over my buns?");
	} else {
		say("\"" + pronoun + " wanting to eat " + typeOfYummies + "!\"");
		say("I search the kitchen for some " + foodType + ".");
		say("So I start cooking up some nice, flavorful " + foodType + " on the stove.");
		say("What kinds of pasta do I have?");
	};
};

// Double String Function
var yumFood = function (foodType) {
	if ( foodType === "hamburgers" ){
		for (var i = 0, j = bunToppings.length; i < j; i++) {
			say( "The condiments " + bunToppings[i] + ", " + condosAvail[i] + " good." );
		};
	} else {
		for (var i = 0, j = pastaTypes.length; i < j; i++) {
			say( "The " + pastaTypes[i] + ", " + pastaAvail[i] + " available." );
		};
	};
};

// While-Loop Function
var song = function () {
	while (myCash > 0) {
		say( "\"" + myCash + " dollars are fleeting. Oh NOES!!!\"" );
		myCash--;
	};
	say( "\"No more cash in my wallet. What should I do?\"" );
	noCash = 0;
	return noCash;
};

// For-Loop Function
var shopOneStore = function(storeName, minThisStore){
	say("\"Shopping at " + storeName + " for "
		+ minThisStore + " minutes.\"");
	for (var minutes = 0; minutes < minThisStore; minutes += 5){
		var minRemain = minThisStore - minutes;
		say( "\"" + minutes + " have past, " + minRemain + " left to go!\"" );
	};
	
	say( "\"I'm done with " + storeName + ", for now! *Snicker*\"" );
};

var goToStores = function(storeNames, minPerStore) {
	for (var storeNumber = 0; storeNumber < storeNames.length; storeNumber++){
		var storeName = storeNames[storeNumber],
			minThisStore = minPerStore[storeNumber];
		shopOneStore( storeName, minThisStore );
	};
};

// My Procrastination Adventure!

say("It\'s 10am, time to get on to my schoolwork for the week.");

say("I don\'t really feel up to it, so I make a decision to play my game console instead.");

var gameTime = playTime(true);

say("Crap, it\'s really three o\'clock, I should get started on school.");

say("But, it can wait a couple more hours, so I decide to get something to eat.");

say("Oh but what to eat?");

say("I have pasta or hamburgers, hmmm.");

feedingTime("I\'m" , foodType);

yumFood(foodType);

say("I eat up all the yumminess, and finally decide I\'m ready for the week\'s schoolwork.");

say("But now I only have a couple hours left in the day until it\'s due.");

say("What should I do?");

say("I sing a song to myself!");

song();

say("A quick glance at my wallet confirms the song\'s truth...");

say("I have " + noCash + " cash in my wallet, darn!");

say("Okay, I think I\'m done singing for the week... Now what?");

say("There isn't much time left today. What to do now?");

say("Cram as much as I can in the hours I have left, or go Shopping?");

say("Number 2 sounds really good to me.");

goToStores(storeNames, minPerStore);

say("\"Now it's really late! I need to get some rest.\"");

say("The End!");
*/


