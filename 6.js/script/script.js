// function key(a,b){
//         if(a>b){
//             console.log(a);
//         }else if(b>a){
//             console.log(b);
//         }else{
//             console.log("teng");
//         }
// }
// key(+prompt("a"),+prompt("b"));
// function qaytaruvchi(a,b){
//     return a + b
// }
// let k = qaytaruvchi(5,6),
// m = key(3,4);
// console.log(k);
// console.log(m);

// const colback = () =>{
//     console.log("salom");
// }
// const colbackQaytar = (a,b) =>{
//     return a + b;
// }
// colback()
// console.log(colbackQaytar(5,15));




// let oby = {
//     name:[
//         {
//             age:[
//                 {full_name:"ALi"}
//             ]
//         }
//     ]
// }
// console.log(oby.name[0].age[0].full_name);
// let massiv = [
//     1,2,3,"true",false
// ]
// console.log(massiv);
// console.log(massiv.join(" *"));/// massivni * bilan qoshib yozish
// console.log(massiv.join(" *"));
// console.log(massiv.join("8"));
// let soz = "hello,world";
// console.log(soz[4]);
// console.log(soz.split(""));
// console.log(soz.split(","));///string , bilan massivga aylantirish

let massiv = [
    5,6,12,55,23,24,26
]

const toqIndex = (index) =>{
    for(let i = 0; i<index.length; i++){
        if((i+1) % 2 != 0 ){
            // console.log(index[i]);
            if(index[i] % 2 ==0){
                console.log(index[i]);
            }
        }
    }
}
toqIndex(massiv)