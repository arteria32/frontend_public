// Циклы while и for

let i = 2
for (i; i <= 10; i++) {
    if (i % 2 == 0) {
      alert(i)
    }
  }




let num

do {
  num = prompt("введите число больше 100")
} while (num <= 100 && num)



let n = 10

next:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) 
    continue next
  }

  alert(i)
}



// Конструкция "switch"

if(browser === 'Edge') {
    alert("You've got the Edge!")

  } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' )
  } else {
    alert( 'We hope that this page looks ok!' )
  }




const number1 = +prompt('Введите число между 0 и 3')

switch (number1) {
  case 0:
    alert('Вы ввели число 0')
    break

  case 1:
    alert('Вы ввели число 1')
    break

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3')
    break
}




// Функции

function min(a, b) {
    if (a < b) {
      return a
    } else {
      return b
    }
  }





function pow(x, m) {
    let result = x
  
    for (let i = 1; i < m; i++) {
      result *= x
    }
  
    return result
  }
  
  let x = prompt("введите число")
  let m = prompt("введите его степень")
  
  if (m < 1) {
    alert(`степень должна быть натуральым числом`)
  } else {
    alert( pow(x, m) )
  }



