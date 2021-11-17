var elemen = [];
dataList.forEach(res => {
    elemen  += `<tr>
                    <td>${res.title}</td>
                    <td>${res.album}</td>
                    <td>${res.artist}</td>
                </tr>`;
});
var newBox      = document.getElementById('theBox');
newBox.innerHTML = elemen;