/* komentaras*/


var x = 5;
sudetis =function (a,b) {
    return a + b;

}
atimtis = function (d,e) {
    return d - e;

}
f=sudetis(2,2);
g=atimtis(5,3);

console.log('f '+ f);
console.log('g '+g);

let rezultatas =document.getElementById('rezultatai');

function sudeti(a,b) {

    var a=1*document.getElementById('a').value;
    var b=1*document.getElementById('b').value;
    rez=sudetis(a,b)
    document.getElementById('sudetiesrezultatas').innerHTML =rez;

}
