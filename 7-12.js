//Базовые операторы

let a = prompt("Первое число", 1)
let b = prompt("Второе число", 2)

alert(+a + +b)



//Условное ветвление: if, '?'

let nameJS = prompt('Какое "официальное" название JavaScript?')

    if (nameJS == 'ECMAScript') {
      alert('Верно!')

    } else {
      alert('Не знаете? ECMAScript!')
    }




let namber = prompt('Введите число')

if (namber > 0) {
  alert( 1 )
} 
else if (namber < 0) {
  alert( -1 )
} 
else {
  alert( 0 )
}



//Логические операторы

let userName = prompt("кто там?")

if (userName == 'админ') {

  let password = prompt('пароль')

  if (password == 'я главный') {
    alert( 'здравствуйте!!!' )
  } else if (password == '' || password == null) {
    alert( 'отменено' )
  } else {
    alert( 'неверный пароль' )
  }

} else if (userName == '' || userName == null) {
  alert( 'отменено' )
} else {
  alert( "я вас не знаю" )
}
