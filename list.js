window.onload = init;

function init(){
  var button = document.getElementById('addButton');
  button.onclick = handleButtonClick;
}

// function handleButtonClick() {
//   var textInput = document.getElementById("songTextInput");
//   var songName = textInput.value;
// 
//   if (songName === '') { 
//     alert("You have to enter a something in the input box.");
//   } else {
//     var li = document.createElement('li');
//     li.innerHTML = songName;
//     var ul = document.getElementById("playlist");
//     ul.appendChild(li);
//   }
// }

// function handleButtonClick() {
//   // Makes a variable for the text inputed by user using input box
//   var textInput = document.getElementById("songTextInput");
//   console.log(textInput, "<-textInput");
// 
//   // Pulls the value of the text input from the textInput value
//   var inputValue = textInput.value;
//   console.log(inputValue, "<-InputValue");
// 
//   // Sets a variable which creates an empty li variable which can
//   //    be appended with .innerHTML next.
//   var li = document.createElement('li');
//   console.log(li, "<-li");
// 
//   // Alters the li varibale to have an innerHTML equal to the input value
//   li.innerHTML = inputValue;
//   console.log(li.innerHTML, "<-li.innerHTML");
// 
//   // Saves a varibale which slects the UL element with a specific playList id
//   var ul = document.getElementById('playlist');
//   console.log(ul, "<-received elementId from document");
// 
//   // Adds our previously created li element to the ul element we saved in last line of code
//   ul.appendChild(li);
// }

// Wrote it again with no help. Finally getting this. It feels chunky.
function handleButtonClick() {
  var inputValue = document.getElementById('songTextInput');
  var text = inputValue.value;
  var addedSong = document.createElement('li');
  addedSong.innerHTML = text;
  var playlist = document.getElementById('playlist');
  playlist.appendChild(addedSong);
}























