export const minPossibleValue = 0;
export const maxPossibleValue = 1000;

export const inputMinValueMessage = `Введите минимальное значение ≧ ${minPossibleValue} и ≦ ${maxPossibleValue}`;
export const inputMaxValueMessage = `Введите максимальное значение ≦ ${maxPossibleValue} и ≧ ${minPossibleValue}`;
export const exceededValueMessage =
  "Минимальное значение не должно превышать максимальное";

export const inputValidationResult = {
  OK: "ok",
  NaN: "not a number",
  Invalid: "invalid number",
};
