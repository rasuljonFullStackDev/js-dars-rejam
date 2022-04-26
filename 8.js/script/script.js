// function meniBos(){
//     alert("bosildi")
// }
// let btn = document.querySelector(".btn"),
// text = document.querySelector(".text"),
// text_1 = document.querySelector(".text_1"),
// btn2 = document.querySelector(".btn2")
// menu = true;
// function clickFun(){

    // if(menu){
    //     text.innerHTML = "bosildi";
    //     menu = false;
    // }else{
    //     text.innerHTML = "Salom";
    //     menu = true;
    // }
    // text_1.classList.add("text2","text3","aktiv")
// }
// btn.addEventListener('click',clickFun);
// btn2.addEventListener('click',()=>{
//     text_1.classList.remove("text2","text3")
// })




let btn_menu = document.querySelector(".btn_menu"),
navItem = document.querySelector(".nav-item"), menu = true;
btn_menu.addEventListener('click',()=>{
    if(menu){
        navItem.classList.add("activ");
        menu = false;
    }else{
        navItem.classList.remove("activ");
        menu = true;
    }
})
