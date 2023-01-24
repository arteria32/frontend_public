const mainContent = document.getElementsByClassName("main-content")[0];
let minAcceptableValue = 200;
let maxAcceptableValue = 800;

const getData = () => {
  let file = document.getElementById("file").files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    addItem(JSON.parse(reader.result).data);
  };
};

const addItem = (data) => {
  let div = "";
  data.forEach((el) => {
    const value = el.value;
    const num = el.name.slice(-1);
    const item = `<div class="item">
    <div class="item__weight-info">
        <span>Масса</span>
        <span class="item__weight-info-number">${value}</span>
    </div>
    <div class="item__level-indicator">
        <div class="level-indicator__header ${validation(value)} "></div>
            <div class="level-indicator__borders"></div>
                <div class="level-indicator__reservoir">
                    <div class="level-indicator__reservoir__amount-of-substance" 
                        style="height:${value / 10}%"></div>
                    <div class="line line__1"></div>
                    <div class="line line__2"></div>
                    <div class="line line__3"></div>
                </div>
            <div class="level-indicator__borders"></div>
        </div>
        <div class="item__percentage-level">
        <div class="item__percentage-level-number">${value / 10}%</div>
        <div class="item__percentage-level-text">Уровень
            керосина
            в резервуаре №${num}</div>
    </div>
    </div>`;
    div = "".concat(div, item);
  });
  mainContent.innerHTML = div;
};

const changeValues = () => {
  minAcceptableValue = getMinValue();
  maxAcceptableValue = getMaxValue();

  const divGreenSection = document.getElementById("green_type");
  divGreenSection.innerHTML = `${minAcceptableValue} ≦ МАССА ≦ ${maxAcceptableValue}`;
  const divRedSection = document.getElementById("red_type");
  divRedSection.innerHTML = `<div>МАССА < ${minAcceptableValue}</div>
                            <div>МАССА > ${maxAcceptableValue}</div>`;

  let lines = document.querySelectorAll(".level-indicator__header");
  let values = document.querySelectorAll(".item__weight-info-number");

  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.remove(lines[i].classList.item(1));
    lines[i].classList.add(validation(+values[i].textContent));
  }
};

const getMinValue = () => {
  let minValueInput = prompt("Введите минимальное значение ≧ 0 и < 1000");
  if (isNaN(minValueInput) || minValueInput == "") {
    alert("Введите число");
    return getMinValue();
  }
  let minValue = parseInt(minValueInput);
  if (minValue < 0 || minValue >= 1000) {
    alert("Минимальное значение должно быть больше или равно 0 и меньше 1000");
    return getMinValue();
  }
  return minValue;
};

const getMaxValue = () => {
  let maxValueInput = prompt("Введите максимальное значение ≦ 1000 и больше 0");
  if (isNaN(maxValueInput) > 0 || maxValueInput == "") {
    alert("Введите число");
    return getMaxValue();
  }
  let maxValue = parseInt(maxValueInput);
  if (maxValue <= 0 || maxValue > 1000) {
    alert("Максимальное значение должно быть меньше или равно 1000 и больше 0");
    return getMaxValue();
  }
  return maxValue;
};

const validation = (value) => {
  return value >= minAcceptableValue && value <= maxAcceptableValue
    ? "level_green"
    : "level_red";
};
