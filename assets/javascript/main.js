// Initial Firebase 
var firebase = "https://firebasestorage.googleapis.com/v0/b/hibicarose.appspot.com/o/";

// Select Var by ID
var img     = document.getElementById('cover');
var title   = document.getElementById('title');
var album   = document.getElementById('album');
var artist  = document.getElementById('artist');
var year    = document.getElementById('year');
var music   = document.getElementById('music');
var duration   = document.getElementById('duration');

// The Buttons
var btnNext = document.getElementById('btnNext');
var btnPrev = document.getElementById('btnPrev');
var btnPlay = document.getElementById('btnPlay');

// Others
var NumIndex = 0;

// Loading
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "#afterLoad").style.visibility = "hidden";
      document.querySelector(
        "#loader").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loader").style.display = "none";
      document.querySelector(
        "#afterLoad").style.visibility = "visible";
  }
};

// Initial Load //
// Checking Darkmode Status
window.addEventListener('load', (event) => {
  if(localStorage.getItem('darkModeStatus')=="true"){
    document.getElementById('bgstarry').checked = true;
    bgChange();
  }
});

// Checking Last Played
if(localStorage.getItem('lastPlay') != null) {
  NumIndex = localStorage.getItem('lastPlay');
}

// Sett Initial Song
img.setAttribute('src', firebase + dataList[NumIndex].title + '%2Fcover.jpg?alt=media&token=' + dataList[NumIndex].imgtokens);
title.innerHTML   = dataList[NumIndex].title;
album.innerHTML   = dataList[NumIndex].album;
artist.innerHTML  = dataList[NumIndex].artist;
year.innerHTML    = dataList[NumIndex].year;

// Disable Previous Button
if(NumIndex == 0) {
  btnPrev.disabled  = true;
}

// Time bar
music.addEventListener('timeupdate', function() {
  duration.setAttribute('value', this.currentTime / this.duration);
});

// Navbar
let navbarEl = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary ein-primary" style="top:0;">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a id="ttl" class="nav-item nav-link active" href="#">Make our breath Resonate</span></a>
                    </div>
                  </div>
                </nav>`;
document.getElementById('nav').innerHTML = navbarEl;