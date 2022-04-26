// let text = document.querySelector(".text");
// window.addEventListener('keydown',(e)=>{
//     console.log(e);
//     if(e.key.length==1){
//     text.innerHTML += e.key.toLocaleLowerCase()
//     }
//     console.log(e.key);
// })

// window.addEventListener('keyup',(e)=>{
//     console.log(e);
//     if(e.key.length==1){
//     text.innerHTML += e.key.toLocaleLowerCase()
//     }
//     console.log(e.key);
// })

// let card = document.querySelector(".card"),
// x__ = document.querySelector(".x__"),
// y__ = document.querySelector(".y__"),
// mouse = document.querySelector(".mouse")
// ;
// window.addEventListener('mousemove',(e)=>{
//     // console.log(e);
//     console.log(e.clientX);
//     x__.innerHTML = e.clientX;
//     y__.innerHTML = e.clientY;
//     mouse.style.transform = `translate(${e.clientX-20}px,${e.clientY - 110}px)`
// })


let form = document.querySelector(".form"),
username = document.querySelector(".username"),
text1 = document.querySelector(".text1"),
text  = document.querySelector(".text");
form.addEventListener('submit',(e)=>{
    // console.log(e);
    e.preventDefault();
    console.log(username.value);
    text.innerHTML += 
   `  <h1 class="text1">${ username.value}</h1>`;
    username.value = ""
   

})
username.addEventListener('change',(e)=>{
    console.log(e.target.value);
    text.innerHTML += 
    `  <h1 class="text1">${ username.value}</h1>`
    ;
    username.value = ""

})
// username.addEventListener('keydown',(e)=>{
//     console.log(e.target.value);
//     // username.value = ""
//     text1.innerHTML += username.value;

// })
// username.addEventListener('keyup',(e)=>{
//     console.log(e.target.value);
//     text1.innerHTML += username.value;
// })