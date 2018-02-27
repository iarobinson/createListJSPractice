window.onload = init;

function init() { 
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;
  loadPlaylist();
}

function handleButtonClick() {
  var textInput = document.getElementById('songTextInput');
  var songName = textInput.value;
  var li = document.createElement('li');
  li.innerHTML = songName;
  var ul = document.getElementById("list");
  ul.appendChild(li);
  save(songName);
}

function save(item) {
  var playlistArray = getStoreArray("playlist");
  playlistArray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
  var playlistArray = getSavedSongs();
  var ul = document.getElementById("list");
  
  if (playlistArray != null) {
    for (var i = 0; i < playlistArray.length; i += 1) {
      var li = document.createElement("li");
      li.innderHTML = playlistArray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStoreArray("playlist");
}

function getStoreArray(key) {
  var playlistArray = localStorage.getItem(key);
  if (playlistArray === null || playlistArray === "") {
    playlistArray = [];
  } else {
    playlistArray = JSON.parse(playlistArray);
  }
  
  return playlistArray;
}
