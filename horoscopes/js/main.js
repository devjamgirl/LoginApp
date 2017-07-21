
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
function getHoroscopes(){
  //creating new Div//
  var body = document.getElementById('body');
  var newDiv = document.getElementById('newDiv');
  body.appendChild(newDiv);

    //create variable that grabs the value.
    var input = document.getElementById('input');
    //print user input value in the console
    console.log(input.value);
//loop= //
  for(var i = 0; i < horoscopes.length; i++) {
    if(input.value === horoscopes[i].name) {
      //create elements and store them in variables
      var img = document.createElement('img');
      var name = document.createElement('h2');
      var description = document.createElement('p');
//Add classname to those variables
      img.className = 'image';
      name.className = 'name';
      description.className = 'description';

      img.setAttribute('src', horoscopes[i].img);
// Get the elements by the id you created
 document.getElementById('image').src = horoscopes[i].img;
 document.getElementById('name').textContent = horoscopes[i].name;
 document.getElementById('description').textContent = horoscopes[i].description;
    }
    newDiv.appendChild(img);
    newDiv.appendChild(name);
    newDiv.appendChild(description);
    }
}
