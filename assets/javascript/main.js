var bg      = document.getElementById('bg-image');
var box     = document.getElementById('box');
var img     = document.getElementById('cover');
var title   = document.getElementById('title');
var album   = document.getElementById('album');
var artist  = document.getElementById('artist');
var year    = document.getElementById('year');
var music   = document.getElementById('music');
var duration   = document.getElementById('duration');

var btnNext = document.getElementById('btnNext');
var btnPrev = document.getElementById('btnPrev');
var btnPlay = document.getElementById('btnPlay');

var NumIndex = 0;

img.setAttribute('src','assets/music/' + dataList[NumIndex].title + '/cover.jpg');


title.innerHTML   = dataList[NumIndex].title;
album.innerHTML   = dataList[NumIndex].album;
artist.innerHTML  = dataList[NumIndex].artist;
year.innerHTML    = dataList[NumIndex].year;

music.addEventListener('timeupdate', function() {
  duration.setAttribute('value', this.currentTime / this.duration);
});

btnPrev.disabled = true;

function disBtnNext() {
  if((NumIndex+1) == dataList.length) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

function disBtnPrev() {
  if((NumIndex) == 0) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
}

function turnPlay(titleMusic) {
  titleMusic = dataList[NumIndex].title;
  music.setAttribute('src','assets/music/' + titleMusic + '/' + titleMusic + '.mp3');
  music.play();

}

function turnPause() {
  music.pause();
}

function next() {
    // btnNext.preventDefault();
    NumIndex += 1
    img.src = 'assets/music/' + dataList[NumIndex].title + '/cover.jpg';
    title.innerHTML   = dataList[NumIndex].title;
    album.innerHTML   = dataList[NumIndex].album;
    artist.innerHTML  = dataList[NumIndex].artist;
    year.innerHTML    = dataList[NumIndex].year;
    if(music.play) {
      turnPlay();
    }
    disBtnNext(); disBtnPrev();
}

function prev() {
    // btnNext.preventDefault();
    NumIndex -= 1;
    img.src = 'assets/music/' + dataList[NumIndex].title + '/cover.jpg
    title.innerHTML   = dataList[NumIndex].title;
    album.innerHTML   = dataList[NumIndex].album;
    artist.innerHTML  = dataList[NumIndex].artist;
    year.innerHTML    = dataList[NumIndex].year;
    if(music.play) {
      turnPlay();
    }
    disBtnNext(); disBtnPrev();
}
