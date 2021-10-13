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

starts = ((startParams) => {
    img.src = firebase + dataList[NumIndex].title + '%2Fcover.jpg?alt=media&token=' + dataList[NumIndex].imgtokens;
    title.innerHTML   = dataList[startParams].title;
    album.innerHTML   = dataList[startParams].album;
    artist.innerHTML  = dataList[startParams].artist;
    year.innerHTML    = dataList[startParams].year;
    music.setAttribute('src', firebase + dataList[NumIndex].title + '%2F' + dataList[NumIndex].title + '.mp3?alt=media&token=' + dataList[NumIndex].tokens);
    music.play();
    if((startParams+1) == dataList.length) {
        btnNext.disabled = true;
    } else {
        btnNext.disabled = false;
    }
    if((startParams) == 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }
});

plays = ((titles) => {
    for(I = 0; I < dataList.length; I++) {
        if(titles == dataList[I].id) {
            var newPlay = dataList[I].id;
        }
    }
    NumIndex = newPlay - 1;
    starts(NumIndex);
    
});

next = (() => {
    NumIndex += 1;
    starts(NumIndex);
});

prev = (() => {
    NumIndex -= 1;
    starts(NumIndex);
});

turnPause = (() => {
    music.pause();
});

turnResume = (() => {
    music.play();
});

turnPlay = (() => {
    turnPlayParams = NumIndex;
    music.setAttribute('src', firebase + dataList[NumIndex].title + '%2F' + dataList[NumIndex].title + '.mp3?alt=media&token=' + dataList[NumIndex].tokens);
    music.play();
});

bgChange = (() => {
    dark = document.body;
    var starry = document.getElementById('starry');
    var starry1 = document.getElementById('starry1');
    var starry2 = document.getElementById('starry2');
    var starry3 = document.getElementById('starry3');
    dark.classList.toggle("dark-mode");
    starry.classList.toggle("stars");
    starry1.classList.toggle("stars1");
    starry2.classList.toggle("stars2");
    starry3.classList.toggle("stars3");
})