const mainContent = document.getElementsByClassName("main-content")[0];

const minPossibleValue = 0;
const maxPossibleValue = 1000;

let minAcceptableValue = 200;
let maxAcceptableValue = 800;

const inputMinValueMessage = `Введите минимальное значение ≧ ${minPossibleValue} и ≦ ${maxPossibleValue}`;
const inputMaxValueMessage = `Введите максимальное значение ≦ ${maxPossibleValue} и ≧ ${minPossibleValue}`;

const inputValidationResult = {
  OK: "ok",
  NaN: "not a number",
  Invalid: "invalid number",
};

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
    const num = el.name.substring(10);
    const item = `<div class="item">
    <div class="item__weight-info">
        <span>Масса</span>
        <span class="item__weight-info-number">${value}</span>
    </div>
    <div class="item__level-indicator">
        <div class="level-indicator__header ${defineLevel(value)} "></div>
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
  minAcceptableValue = getBoundaryValue(inputMinValueMessage);
  maxAcceptableValue = getBoundaryValue(inputMaxValueMessage);

  while (minAcceptableValue > maxAcceptableValue) {
    alert("Минимальное значение не должно превышать максимальное");
    minAcceptableValue = getBoundaryValue(inputMinValueMessage);
    maxAcceptableValue = getBoundaryValue(inputMaxValueMessage);
  }

  const divGreenSection = document.getElementById("green_type");
  divGreenSection.innerHTML = `${minAcceptableValue} ≦ МАССА ≦ ${maxAcceptableValue}`;
  const divRedSection = document.getElementById("red_type");
  divRedSection.innerHTML = `<div>МАССА < ${minAcceptableValue}</div>
                             <div>МАССА > ${maxAcceptableValue}</div>`;

  let levelIndicators = document.querySelectorAll(".level-indicator__header");
  let values = document.querySelectorAll(".item__weight-info-number");

  for (let i = 0; i < levelIndicators.length; i++) {
    levelIndicators[i].classList.remove(levelIndicators[i].classList.item(1));
    levelIndicators[i].classList.add(defineLevel(+values[i].textContent));
  }
};

const validateInput = (input) => {
  if (isNaN(input) || input === "") {
    return inputValidationResult.NaN;
  }
  let boundaryValue = parseInt(input);
  if (boundaryValue < minPossibleValue || boundaryValue > maxPossibleValue) {
    return inputValidationResult.Invalid;
  }
  return inputValidationResult.OK;
};

const showValidationError = (validationResult) => {
  switch (validationResult) {
    case inputValidationResult.NaN:
      alert("Введите число");
      break;
    case inputValidationResult.Invalid:
      alert(
        `Значение должно быть ≧ ${minPossibleValue} и ≦ ${maxPossibleValue}`
      );
      break;
  }
};

const getBoundaryValue = (inputValueMessage) => {
  let boundaryValueInput = prompt(inputValueMessage);
  let validationResult = validateInput(boundaryValueInput);

  while (validationResult !== inputValidationResult.OK) {
    showValidationError(validationResult);
    boundaryValueInput = prompt(inputValueMessage);
    validationResult = validateInput(boundaryValueInput);
  }

  return parseInt(boundaryValueInput);
};

const defineLevel = (value) => {
  return value >= minAcceptableValue && value <= maxAcceptableValue
    ? "level_green"
    : "level_red";
};

