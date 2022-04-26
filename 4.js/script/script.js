// console.log("ishladi");
let Humoyun = {
    ismi:"Humoyun",
    yoshi:14,
    maktab:58,
    qiziqish:"IT"
};

// console.log(Humoyun);
// console.log(Humoyun.maktab);
// console.log(Humoyun['yoshi']);
// Humoyun.maktab = 55;
// console.log(Humoyun);


let massiv = [
    "salom",123,true,{name:"ALI"}
]
// console.log(massiv);
// console.log(massiv[2]);
// console.log(massiv[3].name);
let g11 = [
    {
        id:0,
        name:"Bahrom"
    },
    {
        id:1,
        name:"Humoyun"
    },
    {
        id:2,
        name:"Dildora"
    }
]
// console.log(g11[1].name);
// g11.push({id:3,name:"Bobur"});
// console.log(g11);
// g11.unshift({id:4,name:"Isroil"});
// console.log(g11);
// g11.pop();
// console.log(g11);
// g11.shift();
// console.log(g11);

// let  n = 0, k = 1;
// for(let i = 1; i<=100; i++){
//     // console.log(i );
//     // console.log("salom" + i);
//     n = n + i;
//     k = k * i;
// }
// // 1+2+3+4+5

// console.log(n);
// console.log(k);
// for(let i = 0;i<massiv.length;i++){
//     console.log(massiv[i]);
// }

// for(let i = 0;i<g11.length; i++){
//     console.log(g11[i].name);
// }



// let k = prompt("ixtiyoriy so'z"), n = prompt("necha marta takrorlanishini kiriting.");
// for(let i = 0; i<n; i++){
//     console.log(k);
// }


let a = +prompt("a ixtiyoriy son kiriting"), b = +prompt("b ixtiyoriy son kiriting");
for(let i = 1+a ; i<b; ++i){
    console.log(i);
}