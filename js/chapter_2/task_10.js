ask = (question, yes, no) => {
// 	if (confirm(question)) yes()
//   else no();
	return yes()
}

(ask(
  "Вы согласны?",
  function() { console.log("Вы согласились."); },
  function() { console.log("Вы отменили выполнение."); }
));