function file(x = 200, y = 800) {
  let file = document.getElementById("file").files[0];
  let reader = new FileReader();
  let div0 = document.createElement("div");
  div0.className = "main__card-container";
  div0.id = "zero";
  reader.readAsText(file);
  reader.onload = function () {
    let resultJson = JSON.parse(reader.result);
    resultJson.map((a, i) => {
      let color = "container__border container__top-border_red";
      if ((x < a.volume) & (a.volume < y)) {
        color = "container__border container__top-border_green";
      }
      let div1 = document.createElement("div");
      div1.className = "card";
      div1.id = "first";
      div1.innerHTML =
        '<div class="card__text card__text-top">' +
        '<div class="card__text_mass">Масса</div>' +
        `<div class=\"card__text_num\">${a.volume}</div>` +
        "</div>" +
        '<div class="container">' +
        `<div class=\"${color}\"></div>` +
        '<div class="container__rezervuar rezervuar">' +
        `<div class = \"rezervuar__dimensional-block\" style=\"height:${
          a.volume / 10
        }%;\"></div>` +
        '<div class="rezervuar__scale-line_position">' +
        ' <div class="rezervuar__scale-line"></div>' +
        '<div class="rezervuar__scale-line"></div>' +
        '<div class="rezervuar__scale-line"></div>' +
        "</div>" +
        "</div>" +
        '<div class="container__border"></div>' +
        "</div>" +
        '<div class="card__text">' +
        `<div class=\"card__percent-square percent-square\">${
          a.volume / 10
        }%</div>` +
        `<div class=\"card__bottom-text\"> Уровень <br />керосина в резервуаре №${
          i + 1
        }` +
        "</div>" +
        "</div>";
      div0.append(div1);
    });
    mainContainer.append(div0);
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
}

function Dep(x, y) {
  var el = document.getElementById("zero");
  el.remove();
  file(x, y);
}

function edit() {
  let textContainer = document.getElementById("edit");
  textContainer.innerHTML =
    '<div class="editMenu">' +
    "<input id='more' type='number'><p onclick={edit1()}>< Масса<<p><input id='less' type='number' >" +
    "</div>";
}
function edit1() {
  var more = document.getElementById("more").value;
  var less = document.getElementById("less").value;
  if ((more == "") & (less == "")) {
    console.log(more.length);
    console.log(less.length);
    more = document.getElementById("more");
    more.style.borderColor = "red";
    less = document.getElementById("less");
    less.style.borderColor = "red";
  } else if (more == "") {
    console.log(more.length);
    more = document.getElementById("more");
    more.style.borderColor = "red";
  } else if (less == "") {
    console.log(less.length);
    less = document.getElementById("less");
    less.style.borderColor = "red";
  } else if (+more <= 0 || +less >= 1000 || +more > +less) {
    alert("Введены неверные границы");
  } else {
    try {
      Dep(more, less);
      editOff(more, less);
    } catch {
      alert("Незагружены данные!!!");
    }
  }
}
function editOff(x, y) {
  let textContainer = document.getElementById("edit");
  textContainer.innerHTML =
    `<div class="squad footer__squad footer__squad_green"></div>` +
    `<div class="footer__text_center">${x} < МАССА < ${y}</div>` +
    `<div class="squad footer__squad footer__squad_red"></div>` +
    `<div class="footer__text_center">` +
    `<div>МАССА < ${x}</div>` +
    `<div>МАССА > ${y}</div>` +
    `</div>`;
}
