"use strict"

function minNumber(a,b){
    if(a>b){
        return b;
    }
    else{
        return a;
    }

}

function powNumber(c, n){
    let result = c;
    for(let i=1; i<n; i++){
        result *= c;
    }
     return result;
}

let d = powNumber(2,10);
alert(d);