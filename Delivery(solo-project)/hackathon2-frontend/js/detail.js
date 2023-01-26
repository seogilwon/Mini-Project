var tbody = document.querySelector("#index2");

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
        <td>${d.no}</td>
        <td>${d.trackingNo}</td>
        <td>${d.name}</td>
        <td>${d.addr}</td>
        <td>${d.tel}</td>
        <td>${d.msg}</td>
        <td>${d.paym}</td>
        <td>${getStatusTitle(d.status)}</td>
        </tr>\n`;
    }
    tbody.innerHTML = html;
  })
  .catch((err) => {
    alert("서버 요청 오류!");
    console.log(err);
  });  