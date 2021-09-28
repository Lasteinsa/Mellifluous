function music(id, title, artist, album, year) {
    this.id     = id;
    this.title  = title;
    this.artist = artist;
    this.album  = album;
    this.year   = year;
}

function selected(bg) {
    this.bg = bg;
}

for(let i=0; i < dataList.length; i++) {
    var Obj  = dataList[i];
    console.log(Obj.title);
    var eldiv = document.createElement('div');
    var elem = document.createElement('h3');
    var text = document.createTextNode(Obj.title);
    var box  = document.getElementById('container');
    eldiv.setAttribute('id',Obj.id);
    elem.appendChild(text);
    eldiv.appendChild(elem);
    box.appendChild(eldiv);
    // var bgr = document.getElementById(Obj.title);
    // bgr.style.color = "red";
    // function selected()
    // eldiv.onclick = function() {
        
    // }
}

var submit = document.getElementById()

