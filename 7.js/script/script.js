// let id_name = document.getElementById("id_name");
// console.log(id_name);
// id_name.innerHTML = "Salom"
// let a = 5, b = 10;
// id_name.innerHTML = a + b 
// let class_name = document.querySelector(".class_name"),
// id_name_2 = document.querySelector("#id_name_2");
// let text2 = "text2"
// console.log(class_name);
// class_name.innerHTML = "text"
// id_name_2.innerHTML = text2;
// console.log(id_name_2.textContent);
// id_name_2.style.color = "red";
// id_name_2.style.marginTop = "50px";
// id_name.textContent = "salom 2"
// let header_text = document.querySelectorAll(".header_text");
// console.log(header_text[1]);
// let cards = document.querySelector(".cards")
// let g11 = [
//     {
//         id: 1,
//         name: "Bahrom",
//         age: 18,
//         tel: "+99891234567"
//     },
//     {
//         id: 2,
//         name: "Bahodir",
//         age: 19,
//         tel: "+99891234567"
//     },
//     {
//         id: 3,
//         name: "Humoyun",
//         age: 14,
//         tel: "+99891234567"
//     },
//     {
//         id: 4,
//         name: "Isroil",
//         age: 14,
//         tel: "+99891234567"
//     }
// ]
// g11.forEach((item) => {
//     console.log(item);
//     cards.innerHTML += `
//     <div class="card">
//             <h1>${item.name}</h1>
//             <h3>${item.age}</h3>
//             <p>${item.tel}</p>
//     </div>  
//     `
// })



let a = +prompt("a"), natija = "";

// for(let i = 0; i<=a; i++){
//     let s = +prompt("s");
//     if(katta>s){
//         katta = s;
//     }
// }
// console.log(katta);

for(let i = 0; i<a; i++){
    if(3**i == a){
        natija = "3 ni darajasi"; break;
    }else{
        natija = "3 ni darajasi emas";
    }
}

console.log(natija);


