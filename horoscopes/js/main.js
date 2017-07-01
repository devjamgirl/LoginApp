// var JavascriptPractice = true
// var difficulty = 'hard'
// var statement = 'javascript is'
// var answer = statement + difficulty
//
//  var name = prompt('what is the difficulty level of Javascript?')
//  if( name != difficulty){
//  console.log('yes')
// } else{
//   console.log('no')
// }
//
// for(i = 0; i != 'hard'; i + 1){
//   console.log('not hard');
// }




//lesson 1
// //print hello world to the console
// console.log("hello world");
// //print hello world to the page (AKA the document)
// document.write("hello world")
// // prints message in pop-up box
// alert("Kiss me")
//
// lesson2
// var name = prompt("Whats your Name?")
// console.log(name)
//
// // lesson3
// var one = 12 + 18
// console.log
// var two = true
//
// var three = "let the sunshine"
//
// var four = [33, 20, 22]

var horoscopes = [
  {
    name: 'leo',
    img:'img/leo-zodiac-sign.png',
    description:'Sign of champions. Passionate people.'
  },
  {
   name: 'libra',
   img:'img/somthing.png',
   description:'Loren Ipsom..'
  },
  {
   name: 'cancer',
   img:'img/cancer-sign.png',
   description:'Loren Ipsom..'
  },
  {
  name: 'scorpio',
  img:'img/scorpio-sign.png',
  description:'Loren Ipsom..'
  },
  {
  name: 'aquarius',
  img:'img/',
  description:'Loren Ipsom..'
  },
  {
   name: 'taurus',
   img:'img/',
   description:'Loren Ipsom..'
  },
  {
   name: 'virgo',
   img:'img/virgo-sign.png',
   description:'Hazel is a potty mouth Ipsom..'
  },
  {
   name: 'gemini',
   img:'img/gemini-sign.png',
   description:'Loren Ipsom..'
  },
  {
   name: 'aries',
   img:'img/aries-sign.png',
   description:'Loren Ipsom..'
  },
  {
   name: 'sagitarius',
   img:'img/sagittarus-sign.png',
   description:'Loren Ipsom..'
  },
  {
   name: 'pices',
   img:'img/pisces-sign.png',
   description:'Loren Ipsom..'
  }
];

var img = document.createElement('img');
// newDiv.appendChild(img);
var name = document.createElement('h2');
// newDiv.appendChild(name);
var description = document.createElement('p');
// newDiv.appendChild(description);
//create a function named getHoroscope.
function getHoroscope(){
  //create variable that prints user input on page.
  var input = document.getElementById('input');
  //print user input value in the console

  console.log(input.value);


  var body = document.getElementById('body');



  //creating new Div//
  var newDiv = document.createElement('div');

  //newDiv is styled as center
  newDiv.className = 'container text-center';

  // to the body add the new div
  body.appendChild(newDiv);

// variable called img that creates img.

  //inside newdiv created add image



  // headerDiv.appendChild(name);
  //inside newdiv created
  // var description = document.createElement('p');
  // newDiv.appendChild(description);

// //how do I document.write the description piece of each horoscope?
//   var description = document.createElement('description');
//   description.appendChild(description);

//loop= //
  for(var i = 0; i < horoscopes.length; i++) {
    if(input.value === horoscopes[i].name) {
      console.log('You typed in ' + horoscopes[i].name)

//img var from the src horoscopes array
      img.src = horoscopes[i].img;
      name.textContent = horoscopes[i].name;
      description.textContent = horoscopes[i].description;
    }
    // else if(input.value != horoscopes[i].name){
    //   document.write('No Results Found with ' + input.value);
    //   str.repeat(1);
    //   console.log('No Results Found with ' + input.value);
    // };
    }

  }
