"use strict";

// Перепишите с использованием функции-стрелки
let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );