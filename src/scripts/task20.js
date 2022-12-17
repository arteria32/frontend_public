// Задание 20: Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

/*
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
*/

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);