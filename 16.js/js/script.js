// let li  = document.createElement('a');
// console.log(li);
// li.setAttribute('href','kun.uz');
// li.setAttribute('class','text');
// let a = li.getAttribute('class');
// console.log(a);
// li.textContent = "salom"  
// document.body.appendChild(li)
// let ota = document.querySelector(".ota"),
// h1 = document.createElement("h1");
// h1.textContent = "h1"
// ota.appendChild(h1)
// console.log(ota);

// let oby = {
//     name:"ALi",
//     age:15,
//     phone:998999996
// }
// console.log(oby);
// console.log(JSON.stringify(oby));
// let json = JSON.stringify(oby);
// console.log(JSON.parse(json));
// let data = [];
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json())
// .then(json=>{
//     console.log(json);
//     data = [...json];
//     [...json].forEach((res)=>{
//         document.body.innerHTML += `
//         <h1 style='color:#92c952;'>${res.name}</h1>
//         `
//     })
// })


// let data1 = "salom";
// localStorage.setItem('data1',data1);
// let data11 = localStorage.getItem('data1');
// document.body.innerHTML = `<h1>${data11}</h1>`
let form = document.querySelector(".form"),
input = document.querySelector(".input"),
storage = document.querySelector('.storage');
let json = [...localStorage.getItem('form') || ""];
storage.innerHTML = `${localStorage.getItem('form')}`
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(localStorage.getItem('form')){
        // let d = ;
        // d.push(input.value);

        localStorage.setItem('form',JSON.stringify([...JSON.parse(localStorage.getItem('form')),{
            id:Math.random(),name:input.value
        }]));
    }else{
        localStorage.setItem('form',JSON.stringify([{
            id:Math.random(),name:input.value
        }]));
    }
    storage.innerHTML = `${localStorage.getItem('form')}`
})






















