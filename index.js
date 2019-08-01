var arrayTruth = [

"What was the last text you sent?",
"If you could keep only one item in the apocalypse, what would it be?",
"What would your first order as president be?",
"Do you like pineapple on pizza?",
"Would you rather fight one horse-sized duck or ten duck-sized horses.",

];

var arrayDare = [

"Text KK!",
"Dance without music for one minute.",
"Poke your head out the door and say GET ALONG LITTLE DOGGY.",
"Pick someone in the room to fake propose to.",
"Sing a Disney song lyric right now really loud.",




];

// TRUTH BUTTON --> RANDOM TRUTH
var truthButton = $('#tb');
truthButton.on('click', showTruth);

var truthContainer  = $('.truthcontainer');
function showTruth(){

var randomNum = Math.random();
var multArrLength = randomNum * arrayTruth.length;
var round = Math.floor(multArrLength);
var showNum = arrayTruth[round];
truthContainer.append(`<h2> ${showNum}</h2>`);


};


// DARE BUTTON --> RANDOM DARE
var dareButton = $('#db');
var dareContainer = $('.darecontainer');
dareButton.on('click', showDare);

function showDare(){



  var randomNum = Math.random();
  var multArrLength = randomNum * arrayDare.length;
  var round = Math.floor(multArrLength);
  var showNum = arrayDare[round];
  dareContainer.append(`<h2> ${showNum}</h2>`);




}

// SECRET PASSCODE
var submit = $('.submit');
var secretContainer = $('.secretContainer');
var secretCode = $('.secretPasscode');

submit.on('click', checkCode);

function checkCode() {

  if (secretCode.val() === "tech,sis") {
    secretContainer.text(`You have cracked the code!`);
    secretContainer.append(`<img src= "https://media1.tenor.com/images/40a215e4f3b2b2abc094eeb1a8471354/tenor.gif?itemid=6131865">`);
}
  else {
    secretContainer.text(`bro that aint it`);
    secretContainer.append(`<img src="https://media.giphy.com/media/8vUEXZA2me7vnuUvrs/giphy.gif">`);
}

}
