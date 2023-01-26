
var values = location.href.split('?');
if (values.length != 2) {
  alert("올바른 페이지 주소가 아닙니다.");
  throw "no 파라미터 값이 누락되었습니다.";
} 

var values2 = values[1].split("=");
if (values2.length != 2 || values2[0] != "no") {
  alert("올바른 페이지 주소가 아닙니다.");
  throw "no 파라미터 값이 누락되었습니다.";
}

var no = parseInt(values2[1]);
if (isNaN(no)) {
  alert("번호가 옳지 않습니다.");
  throw "no 파라미터 값이 숫자가 아닙니다.";
}

fetch(`http://localhost:8080/delivery/${no}`)
  .then((response) => response.json())
  .then((obj) => {
    if (obj.status == "failure") {
      alert("서버 요청 오류!");
      console.log(obj.data);
      return;
    }

    document.querySelector("#d-no").value = obj.data.no;
    document.querySelector("#d-trackingNo").value = obj.data.trackingNo;
    document.querySelector("#d-name").value = obj.data.name;
    document.querySelector("#d-tel").value = obj.data.tel;
    document.querySelector("#d-addr").value = obj.data.addr;
    document.querySelector("#d-paym").value = obj.data.paym;
    document.querySelector("#d-status").value = obj.data.status;
    document.querySelector("#d-msg").value = obj.data.msg;
  })
  .catch((err) => {
    alert("서버 요청 오류!");
    console.log(err)
  });





  document.querySelector('#update-btn').onclick = (e) => {
    var trackingNo = document.querySelector('#d-trackingNo').value;
    var name = encodeURIComponent(document.querySelector('#d-name').value);
    var tel = document.querySelector('#d-tel').value;
    var addr = encodeURIComponent(document.querySelector('#d-addr').value);
    var paym = document.querySelector('#d-paym').value;
    var status = document.querySelector('#d-status').value;
    var msg = encodeURIComponent(document.querySelector('#d-msg').value);
  
    fetch(`http://localhost:8080/delivery/${no}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: `trackingNo=${trackingNo}&name=${name}&tel=${tel}&addr=${addr}&paym=${paym}&status=${status}&msg=${msg}`
    })
    .then((response) => response.json())
    .then((obj) => {
      if (obj.status == "failure") {
        alert("변경 오류!\n" + obj.data);
        return;
      }
      location.href = "index.html";
    })
    .catch((err) => {
      alert("서버 요청 오류!");
      console.log(err);
    });
  };
  

document.querySelector("#delete-btn").onclick = (e) => {

  fetch(`http://localhost:8080/delivery/${no}`, {
      method: 'DELETE'
  })
  .then((response) => response.json())
  .then((obj) => {
      if (obj.status == "failure") {

          return;
      }
      location.href = "index.html";
  })
  .catch((err) => {

      console.log(err);
  });
}

