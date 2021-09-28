function music(id, title, artist, album, year) {
    this.id     = id;
    this.title  = title;
    this.artist = artist;
    this.album  = album;
    this.year   = year;
};

var box = document.getElementById('box');
var img = document.getElementById('cover');

img[0].setAttribute('src','assets/music/' + dataList[0].title + '/cover.jpg');

