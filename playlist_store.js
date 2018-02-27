function init() { 
  var button = document.getElementById('addButton');
  button.onClick = handleButtonClick;
  loadPlaylist();
}

function save(item) {
  console.log('save function called');
  var playlistArray = getStoreArray("playlist");
  playlistArray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistArray));
  console.log(playlistArray);
}

function loadPlaylist() {
  console.log('loadPlaylistCalled');
  var playlistArray = getSavedSongs();
  var ul = document.getElementById("playlist");
  
  if (playlistArray != null) {
    for (var i = 0; i < playlistArray.length; i += 1) {
      var li = document.createElement("li");
      li.innderHTML = playlistArray[i];
      ul.appendChile(li);
    }
  }
  console.log('playlist loaded');
}

function getSavedSongs() {
  console.log('getSavedSongs called');
  return getStoreArray("playlist");
}

function getStoreArray(key) {
  console.log('getStore Array Called');
  var playlistArray = localStorage.getItem(key);
  if (playlistArray === null || playlistArray === "") {
    playlistArray = [];
  } else {
    playlistArray = JSON.parse(playlistArray);
  }
  
  return playlistArray;
}

function handleButtonClick() {
  var inputValue = document.getElementById('songTextInput');
  var songName = inputValue.value;
  var li = createElement('id');
  li.innerHTML = songName;
  var ul = document.getElementById('playlist');
  ul.appendChild(li);
  save(songName);
}