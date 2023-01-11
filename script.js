let uploadFile = document.getElementById('upload-file');
let uploadButton = document.getElementById('upload-btn');
let container = document.querySelector('.content');

let changeButton = document.getElementById('change-btn');

let minAcceptableValue = 200;
let maxAcceptableValue = 1000;

uploadButton.addEventListener('click', function () {
  uploadFile.click();
});

function validation(volume) {
  if (volume < maxAcceptableValue && volume > minAcceptableValue) {
    return 'green';
  } else {
    return 'red';
  }
}

function addReservoir(obj) {
  let id = parseInt(obj.name.match(/\d+/));

  let div = document.createElement('div');

  div.innerHTML = `<div class="tank">
  <div class="title">
    <div class="mass">Масса</div>
    <div class="value">${obj.volume}</div>
  </div>
  <div class="line ${validation(obj.volume)}"></div>
  <div class="border"></div>
  <div class="diagram">
    <div class="degree1"></div>
    <div class="degree2"></div>
    <div class="degree3"></div>
    <div class="level" style="height:${(obj.volume / 10) * 1.235}px;"></div>
  </div>
  <div class="border"></div>
  <div class="legend">
    <div class="precent">${obj.volume / 10 + '%'}</div>
    <div class="text">Уровень керосина <br />в резервуаре №${id}</div>
  </div>
</div>`;
  container.appendChild(div);
}

uploadFile.addEventListener('change', async (e) => {
  const file = await e.target.files[0].text();

  const data = JSON.parse(file);

  for (let obj in data) {
    addReservoir(data[obj]);
  }
});

changeButton.addEventListener('click', function () {
  minAcceptableValue = prompt('Введите минимальное значение >0');
  maxAcceptableValue = prompt('Введите максимальное значение <1000');

  if (
    minAcceptableValue < 0 ||
    maxAcceptableValue > 1000 ||
    typeof minAcceptableValue !== 'number' ||
    typeof maxAcceptableValue !== 'number'
  ) {
    alert(
      'Минимальное значение должно быть больше 0, максимальное меньше 1000'
    );
    minAcceptableValue = prompt('Введите минимальное значение >0');
    maxAcceptableValue = prompt('Введите максимальное значение <1000');
  }

  let rules = document.querySelectorAll('.rule');
  let rulesList = document.querySelector('.rules');

  for (let rule of rules) {
    rulesList.removeChild(rule);
  }

  rulesList.innerHTML = `
  <div class="rule">
    <div class="rec_green"></div>
    ${minAcceptableValue} < МАССА < ${maxAcceptableValue}
  </div>
  <div class="rule">
    <div class="rec_red"></div>
    <div>
      МАССА < ${minAcceptableValue}<br />
      МАССА > ${maxAcceptableValue}
    </div>
  </div>`;

  let lines = document.querySelectorAll('.line');
  let values = document.querySelectorAll('.value');

  for (let i = 0; i < lines.length; i++) {
    if (
      +values[i].textContent > minAcceptableValue &&
      +values[i].textContent < maxAcceptableValue
    ) {
      lines[i].classList.remove(lines[i].classList.item(1));
      lines[i].classList.add('green');
    } else {
      lines[i].classList.remove(lines[i].classList.item(1));
      lines[i].classList.add('red');
    }
  }
});
