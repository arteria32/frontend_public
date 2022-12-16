//Задание 1
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => сonsole.log("Вы согласились."),
  () => сonsole.log("Вы отменили выполнение.")
);
