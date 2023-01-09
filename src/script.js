let fileInput = document.getElementById("file-input");
let tanks = document.querySelector(".tanks-flex");
let minAccepted = 200;
let maxAccepted = 800;

let tankLegend = document.querySelector(".tank-information__legend");
let accepted = document.createElement("div");
accepted.className = "tank-information__legend__item";
accepted.innerHTML = `<div class="tank-information__legend__item__square accepted"></div>
<div class="tank-information__legend__item__text">
  ${minAccepted} &lt; МАССА &lt; ${maxAccepted}
</div>`;

let critical = document.createElement("div");
critical.className = "tank-information__legend__item";
critical.innerHTML = `<div class="tank-information__legend__item__square critical"></div>
<div class="tank-information__legend__item__text">
  МАССА &lt; ${minAccepted} <br />
  МАССА &gt; ${maxAccepted}
</div>`;

tankLegend.appendChild(accepted);
tankLegend.appendChild(critical);

function validation(volume) {
  if (volume >= minAccepted && volume <= maxAccepted) {
    return "accepted";
  } else {
    return "critical";
  }
}

function addReservoir(obj) {
  let id = parseInt(obj.name.match(/\d+/));

  let div = document.createElement("div");
  div.className = "tank-information__tanks__tank";

  div.innerHTML = `<div class="tank-information__tanks__tank__mass">
  <div class="tank-information__tanks__tank__mass__text">Масса</div>
  <div class="tank-information__tanks__tank__mass__number">${obj.volume}</div>
</div>
<div class="tank-information__tanks__tank__line ${validation(
    obj.volume
  )}"></div>
<div class="tank-information__tanks__tank__container">
  <div class="tank-information__tanks__tank__container__border"></div>
  <div class="tank-information__tanks__tank__container__space">
    <div
      class="tank-information__tanks__tank__container__space__liquid"
      style="height: ${obj.volume / 10 + "%"}"
    ></div>
    <div style="position: relative; width: 0; height: 0">
      <div
      class="tank-information__tanks__tank__container__line line25"
      ></div>
      <div
        class="tank-information__tanks__tank__container__line line50"
      ></div>
      <div
        class="tank-information__tanks__tank__container__line line75"
      ></div>
    </div>
  </div>
  <div class="tank-information__tanks__tank__container__border"></div>
</div>
<div class="tank-information__tanks__tank__level">
  <div class="tank-information__tanks__tank__level__percent">${
    obj.volume / 10 + "%"
  }</div>
  <div class="tank-information__tanks__tank__level__text">
    Уровень <br />
    керосина <br />
    в резервуаре №${id}
  </div>
</div>`;
  tanks.appendChild(div);
}

fileInput.addEventListener("change", (e) => {
  let file = e.target.files[0];

  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function () {
    let data = reader.result;
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i++) {
      addReservoir(data[i]);
    }
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
});
