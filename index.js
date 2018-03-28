function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const target1 = document.querySelector('main#app div#nested div.target');
  return target1;
}

function increaseRankBy(n) {
  const uppedByN = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < uppedByN.length; i++) {
    uppedByN[i].innerHTML = (i + n).toString();
  }
}

function deepestChild () {
  var thasDeep = document.getElementById('grand-node').querySelectorAll('div');
  
}





