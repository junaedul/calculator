let result = document.getElementById("result");

for (let i = 0; i <= 9; i++) {
    document.getElementById(i).addEventListener("click", function () {
        result.value += i;
    });
}
let add= document.getElementById("add");
add.addEventListener("click", function(){
    result.value += "+";
})
let subtract=document.getElementById("subtract");
subtract.addEventListener("click", function(){
    result.value += "-";
})
let multiply=document.getElementById("multiply");
multiply.addEventListener("click", function(){
    result.value += "*";
})
let divide=document.getElementById("divide");
divide.addEventListener("click", function(){
    result.value += "/";
})
let clear=document.getElementById("clear");
clear.addEventListener("click", function(){
    result.value = "";
})
let equal=document.getElementById("equal");
equal.addEventListener("click", function(){
    let x = result.value;
    let y = eval(x);
    result.value = y;
})

