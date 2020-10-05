let a = 5;
let sum = (x, y) => {
    x + y
};
let b = 6;
let c = 7;



var aLi = document.querySelectorAll('#nav li');
for (let i = 0; i < aLi.length; i++) {
    aLi[i].onclick = function () {
        console.log(i)
    }
}