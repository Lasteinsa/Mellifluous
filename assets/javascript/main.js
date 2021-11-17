// Initial Firebase 
var firebase = "https://firebasestorage.googleapis.com/v0/b/hibicarose.appspot.com/o/";

// Select Var by ID
var bg      = document.getElementById('bg-image');
var box     = document.getElementById('box');
var img     = document.getElementById('cover');
var bigImg  = document.getElementById('bigCover');
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

// Initial Load
img.setAttribute('src', firebase + dataList[NumIndex].title + '%2Fcover.jpg?alt=media&token=' + dataList[NumIndex].imgtokens);
title.innerHTML   = dataList[NumIndex].title;
album.innerHTML   = dataList[NumIndex].album;
artist.innerHTML  = dataList[NumIndex].artist;
year.innerHTML    = dataList[NumIndex].year;
btnPrev.disabled  = true;

// Functions
music.addEventListener('timeupdate', function() {
  duration.setAttribute('value', this.currentTime / this.duration);
});

