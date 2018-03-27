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
  const boogitey = document.getElementById('app').querySelectorAll('div#grand-node');
  var thot = [];
  typeof thot === "string";
  function find(boogitey, thot) {
    let current = object;
    let next = [];
    while (current) {
      if (thot(current)) {
        return current;
      } 
      if (Object.isObject(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i]);
        }
      }
      current = next.shift();
    }
    return null;
  }
}





