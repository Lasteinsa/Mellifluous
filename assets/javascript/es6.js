/**
 * Show and Remove List
 */
cat = ((param) => {
    var un = document.getElementById('theBox');
    while (un.firstChild) {
        un.removeChild(un.firstChild);
    }
    let elemen = [];
    dataList.forEach(res => {
        if(param == res.cat) {
            elemen  +=  `<tr>
                            <td id="${res.id}" class="res" onclick="plays(${res.id})">${res.title}</td>
                        </tr>`;
        }
    });
    un.innerHTML = elemen;
});

/**
 * Manipulate Player
 */
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

/**
 * Play Song
 */
plays = ((titles) => {
    for(I = 0; I < dataList.length; I++) {
        if(titles == dataList[I].id) {
            var newPlay = dataList[I].id;
        }
    }
    NumIndex = newPlay - 1;
    starts(NumIndex);
    
});

/**
 * Button Next
 */
next = (() => {
    NumIndex += 1;
    starts(NumIndex);
});

/**
 * Button Previous
 */
prev = (() => {
    NumIndex -= 1;
    starts(NumIndex);
});

/**
 * Button Pause
 */
turnPause = (() => {
    music.pause();
});

/**
 * Button Resume
 */
turnResume = (() => {
    music.play();
});

/**
 * Button Play
 */
turnPlay = (() => {
    turnPlayParams = NumIndex;
    music.setAttribute('src', firebase + dataList[NumIndex].title + '%2F' + dataList[NumIndex].title + '.mp3?alt=media&token=' + dataList[NumIndex].tokens);
    music.play();
});

/**
 * Button Change Background
 */
bgChange = (() => {
    dark = document.body;
    var starry  = document.getElementById('starry');
    var starry1 = document.getElementById('starry1');
    var starry2 = document.getElementById('starry2');
    var starry3 = document.getElementById('starry3');
    var chk     = document.getElementById('bgstarry');
    dark.classList.toggle("dark-mode");
    starry.classList.toggle("stars");
    starry1.classList.toggle("stars1");
    starry2.classList.toggle("stars2");
    starry3.classList.toggle("stars3");
    localStorage.setItem('darkModeStatus', chk.checked);
});

/**
 * Button to All List
 */
showElse = (() => {
    window.location.href = ('all.html');
});
