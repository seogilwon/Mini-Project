var tbody = document.querySelector("#index1");
var total = document.querySelector("#d-total");

function getStatusTitle(level) {
  switch (level) {
    case 1: return "배송준비";
    case 2: return "배송중";
    case 3: return "배송완료";
    default: return "";
  }
}

fetch('http://localhost:8080/delivery')
  .then((response) => {return response.json();})
  .then((obj) => {
    var html = '';
    for (var d of obj.data) {
      html += `<tr>
        <td>${d.name}</td>
        <td>${d.addr}</td>
        <td>${getStatusTitle(d.status)}</td>
        <td><a href="modify.html?no=${d.no}">${d.trackingNo} </a></td>
        </tr>\n`;
    } console.log(obj.data);
    tbody.innerHTML = html;
  })



  .catch((err) => {
    alert("서버 요청 오류!");
    console.log(err);
  });  