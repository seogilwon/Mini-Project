document.querySelector('#add-btn').onclick = (e) => {
  var trackingNo = document.querySelector('#d-trackingNo').value;
  var name = encodeURIComponent(document.querySelector('#d-name').value);
  var tel = document.querySelector('#d-tel').value;
  var addr = encodeURIComponent(document.querySelector('#d-addr').value);
  var paym = document.querySelector('#d-paym').value;
  var status = document.querySelector('#d-status').value;
  var msg = encodeURIComponent(document.querySelector('#d-msg').value);

  console.log(`name=${name}&tel=${tel}&addr=${addr}&paym=${paym}&status=${status}&msg=${msg}`);

  fetch('http://localhost:8080/delivery', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `trackingNo=${trackingNo}&name=${name}&tel=${tel}&addr=${addr}&paym=${paym}&status=${status}&msg=${msg}`
  })
  .then((response) => {return response.json();})
  .then((obj) => {
    location.href = "index.html";
  })
  .catch((err) => {
    alert("서버 요청 오류!");
    console.log(err);
  });
};

document.querySelector('#cancel-btn').onclick = (e) => {
  location.href = "add.html";
};