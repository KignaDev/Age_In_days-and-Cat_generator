//challenge 1: Your Age in Days 
function Ageindays() {
  var birthYear= prompt('what year were you born ?');
  var Ageindayss =(2018- birthYear) * 365;
  var h1= document.createElement('h1');
  var textanswer = document.createTextNode('You are ' + Ageindayss + ' days old.')
  h1.setAttribute('id', 'AgeinDays');
  h1.appendChild(textanswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
  //document.getElementById('AgeinDays');
  document.getElementById("AgeinDays").remove();
}

function Generatecat(){
  var image =document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "https://media3.giphy.com/media/MDJ9IbxxvDUQM/200.gif"
  div.appendChild(image);

}