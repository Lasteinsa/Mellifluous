function music(id, title, artist, album, year) {
    this.id     = id;
    this.title  = title;
    this.artist = artist;
    this.album  = album;
    this.year   = year;
};

var box     = document.getElementById('box');
var img     = document.getElementById('cover');
var title   = document.getElementById('title');
var album   = document.getElementById('album');
var artist  = document.getElementById('artist');
var year    = document.getElementById('year');

var btnNext = document.getElementById('btnNext');
var btnPrev = document.getElementById('btnPrev');
var NumIndex = 0;

img.setAttribute('src','assets/music/' + dataList[NumIndex].title + '/cover.jpg');
title.innerHTML   = dataList[NumIndex].title;
album.innerHTML   = dataList[NumIndex].album;
artist.innerHTML  = dataList[NumIndex].artist;
year.innerHTML    = dataList[NumIndex].year;

function next() {
    // btnNext.preventDefault();
    NumIndex += 1;
    img.src = 'assets/music/' + dataList[NumIndex].title + '/cover.jpg';
    title.innerHTML   = dataList[NumIndex].title;
    album.innerHTML   = dataList[NumIndex].album;
    artist.innerHTML  = dataList[NumIndex].artist;
    year.innerHTML    = dataList[NumIndex].year;
}

function prev() {
    // btnNext.preventDefault();
    NumIndex -= 1;
    img.src = 'assets/music/' + dataList[NumIndex].title + '/cover.jpg';
    title.innerHTML   = dataList[NumIndex].title;
    album.innerHTML   = dataList[NumIndex].album;
    artist.innerHTML  = dataList[NumIndex].artist;
    year.innerHTML    = dataList[NumIndex].year;
}
