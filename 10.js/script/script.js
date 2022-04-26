// let tab_btn = document.querySelectorAll(".tab_btn"),
// tabBody = document.querySelectorAll(".tab-body")
// tabBody[0].style.display="block"
// tab_btn.forEach((tab,i)=>{
//     tab.addEventListener('click',(e)=>{
//         console.log(e.target);
//         console.log(i);
//         for(let key of tabBody){
//             key.style.display = "none"
//         }
//         for(let key of tab_btn){
//             key.style.color = ""
//         }
//         tabBody[i].style.display = "block"
//         e.target.style.color ="red"
//     })
// })


let modal_btn = document.querySelector(".modal_btn"),
modal = document.querySelector(".modal"),
close = document.querySelector(".close"),
modal_body = document.querySelector(".modal_body");

modal_btn.addEventListener("click",()=>{
    modal.classList.add("activ");
    modal_body.classList.add("activ");

})
close.addEventListener("click",()=>{
    modal.classList.remove("activ")
    modal_body.classList.remove("activ");

})