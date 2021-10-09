cat = ((param) => {
    var un = document.getElementById('theBox');
    while (un.firstChild) {
        un.removeChild(un.firstChild);
    }
    let params = param;
    let ls = 0;
    for(ls = 0; ls < dataList.length; ls++) {
        if(params == dataList[ls].cat) {
            var newText = document.createTextNode(dataList[ls].title);
            let newElem = document.createElement('td');
            let newElem2 = document.createElement('tr');
            var newBox  = document.getElementById('theBox');
            newElem.appendChild(newText);
            newElem2.appendChild(newElem);
            newBox.appendChild(newElem2);
            newElem.setAttribute("id", dataList[ls].id);
            newElem.setAttribute("class", "res");
            newElem.setAttribute("onclick", "plays("+dataList[ls].id+")");
        } else {

        }
    }
});

plays = ((titles) => {
    for(I = 0; I < dataList.length; I++) {
        if(titles == dataList[I].id) {
            var newPlay = dataList[I].id;
        }
    }
    NumIndex = newPlay - 1;
    img.src = 'assets/music/' + dataList[NumIndex].title + '/cover.jpg';
    title.innerHTML   = dataList[NumIndex].title;
    album.innerHTML   = dataList[NumIndex].album;
    artist.innerHTML  = dataList[NumIndex].artist;
    year.innerHTML    = dataList[NumIndex].year;
    music.setAttribute('src','assets/music/' + dataList[NumIndex].title + '/' + dataList[NumIndex].title + '.mp3');
    music.play();
    if((NumIndex+1) == dataList.length) {
        btnNext.disabled = true;
    } else {
        btnNext.disabled = false;
    }
    if((NumIndex) == 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }
});

