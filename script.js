function loadData() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    var elem = document.getElementById('counter');
    elem.innerHTML = xhr.responseText;
  });
  xhr.open('GET', 'http://localhost/get');
  xhr.send();
}

window.addEventListener('load', loadData);
