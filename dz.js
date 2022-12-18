'use strict'

function alertHelloWorld(){
    alert('Hello world!');
}

function task2(){
    let name = 'John';
    let admin = name;
    alert(admin);
}

function task3(){
    let userName = prompt('Name?', 'Stepa');
    alert(userName);
}

function task4(){
    let userName = prompt('Name?', 'Stepa')
    let a = (userName === 'Stepa') ? alert('Eto ya') : alert('Eto ne ya')
}

function task5(age){
    if ((age >= 14) && (age <= 90)){
        return true;
    }
    return false;
}

function task6(){
    let user = prompt('who are u?', []);
    if (!user) {
        alert('Aborted');
    } else if (user == 'admin' || user == 'Admin'){
        let passwordAdmin = 'I am in charge';
        let password = prompt('Pass?');

        if (!password){
            alert('Aborted');
        } else if (password == passwordAdmin){
            alert('Hello');
        } else {
            alert('wrong')
        }
    } else {
        alert('I dont know u')
    }
}

function task7(){
    let n = 10
    main: for(let i = 2; i <= n; i++){
        
        for(let j = 2; j < i; j++){
            if (!(i % j)) continue main
        }

        alert(i)
    }
}

function task8(){
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }
      
    ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
    );
}