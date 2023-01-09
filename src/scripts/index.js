import {
  headerButton,
  uploadButton,
  reservoirContainer,
  changeFrontiersButton,
  weightFrontiers,
} from "./const.js";

document
  .querySelector(".main__footer")
  .insertAdjacentElement("afterbegin", changeFrontiersButton);

const prevValues = [200, 800];

for (let i = 0; i < weightFrontiers.length; i++) {
  weightFrontiers[i].addEventListener("input", (event) => {
    const target = event.target;

    if (target.checkValidity() && +target.value <= 999) {
      prevValues[i % 2] = target.value;
    } else {
      target.value = prevValues[i % 2];
    }

    weightFrontiers[(i + 2) % 4].value = target.value;

    if (changeFrontiersButton.style.display === "") {
      changeFrontiersButton.style.display = "block";
    }
  });
}

changeFrontiersButton.addEventListener("click", () => {
  const values = weightFrontiers.map((weightFrontier) => +weightFrontier.value);

  const cisternWeights = document.querySelectorAll(".cistern__weight");

  if (
    values[0] >= 1 &&
    values[2] >= 1 &&
    values[0] + 2 <= values[1] &&
    values[2] + 2 <= values[3]
  ) {
    for (const cisternWeight of cisternWeights) {
      const cisternVolume =
        +cisternWeight.querySelector(".cistern__value").textContent;

      if (values[0] < cisternVolume && cisternVolume < values[1]) {
        cisternWeight.classList.remove("cistern__weight_border-bottom_red");
        cisternWeight.classList.add("cistern__weight_border-bottom_green");
      } else {
        cisternWeight.classList.remove("cistern__weight_border-bottom_green");
        cisternWeight.classList.add("cistern__weight_border-bottom_red");
      }
    }

    changeFrontiersButton.style.display = "";
  } else {
    alert("Заданы некорректные границы!");
  }
});

uploadButton.addEventListener("change", async (event) => {
  const target = event.target;

  const extension = target.value.match(/\.([^\.]+)$/)[1];

  if (extension !== "json") {
    alert("Загрузка файлов с таким расширением не поддерживается");

    target.value = "";

    return;
  }

  const fileContent = await target.files[0].text();

  const reservoirs = JSON.parse(fileContent);

  for (const reservoir of reservoirs) {
    if (reservoir.volume <= 1000) {
      reservoirContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="cistern">
      <div class="cistern__body">
        <div class="cistern__weight ${
          +weightFrontiers[0].value < reservoir.volume &&
          reservoir.volume < +weightFrontiers[1].value
            ? "cistern__weight_border-bottom_green"
            : "cistern__weight_border-bottom_red"
        }">
          <span class="cistern__title">Масса</span>
          <span class="cistern__value">${reservoir.volume}</span>
        </div>
        <div class="cistern__filling-wrapper">
            <div class="cistern__threshold cistern__threshold_high"></div>
            <div class="cistern__threshold cistern__threshold_medium"></div>
            <div class="cistern__threshold cistern__threshold_low"></div>
          <div class="cistern__filling" style="height: ${Math.ceil(
            reservoir.volume / 10
          )}%">
          </div>
        </div>
      </div>
      <div class="cistern__footer">
        <div class="cistern__percent">${Math.ceil(reservoir.volume / 10)}%</div>
        <p class="cistern__description">Уровень керосина в ${reservoir.name.toLowerCase()}</p>
      </div>
    </div>`
      );
    }
  }
});

headerButton.addEventListener("click", (event) => {
  event.preventDefault();

  uploadButton.click();
});
