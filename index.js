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


var truthButton = $('#tb');
truthButton.on('click', showTruth);

var truthContainer  = $('.truthcontainer');
function showTruth(){

truthContainer.text(arrayTruth[2]);
//truthContainer.append(`<img src="">`)
};

var dareButton = $('#db');
var dareContainer = $('.darecontainer');
dareButton.on('click', showDare);

function showDare(){

dareContainer.text(arrayDare[4]);

};


var submit = $('.submit');
var secretContainer = $('.secretContainer');
var secretCode = $('.secretPasscode').val();

submit.on('click', checkCode);

function checkCode(){

  if (secretCode.val() === "tech,sis")
    secretContainer.text(`You have cracked the code!`);
    secretContainer.append(`<img src= "https://media1.tenor.com/images/40a215e4f3b2b2abc094eeb1a8471354/tenor.gif?itemid=6131865">`);
  else {
    secretContainer.text(`bro that aint it`);
    secretContainer.append(`<img src="https://media.giphy.com/media/8vUEXZA2me7vnuUvrs/giphy.gif">`)
}

}
