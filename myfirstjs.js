console.log("Hello world!!");

//Variables
let name = "Mixalis";
let lastname;
lastname = "Chamilos";
console.log(name + lastname);
console.log(typeof lastname);
lastname = 45;
console.log(name + lastname);
console.log(typeof lastname);
/*
many comments mpal mpla
*/

// the old one change with let
var myname = "Mixalis";
var myname = 50;
//let lastname; not allowed

function showscope() {
    test=5;
    if (myname === 50)
    {
        var test = "hellooooo";
        //let test = "helloooo";
    }
    console.log(test); //Let is undefined
}

showscope();

const p = 3.14;
//p =5; cannot change const value
console.log(p);

function checkValue() {
    //let checkval = 30;
    let checkval = "30";
    //check diff between == and ===
    if ( checkval === 30)
    {
        console.log("equal"); 
    }
    else
    {
        console.log("not equal"); 
    }
    
}

checkValue();

console.clear();

//while loop
let count=5;
while(count>0) {
    console.log(count);
    count--; //without step code and site crush
}

//NAming variables
//let 5kati; //cannot start with number
let bord3rs = 100;
let _under = "hello";
let $pro = 50;

//1
//12
//123
//1234
//12345
let sname = "1";
let i = 1;
while (i <= 5) {
 if (i == 1) {
 console.log(sname);
 }else {
 sname = sname+i;
 console.log(sname);
 }
 i++;
}

