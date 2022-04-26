// let hour = document.querySelector(".hour"),
// i = 500,
// btn = document.querySelector(".btn"),
// btn_stop = document.querySelector(".btn_stop"),
// btn_reset = document.querySelector(".btn_reset"),
// clear;
// function HourSana(){
//         i++;
//         if(i>500){
//             i = 0;
//         }
//         hour.innerHTML = i
// }
// btn.addEventListener('click',()=>{
//     clear =  setInterval(HourSana,0)
// })
// btn_stop.addEventListener('click',()=>{
//   clearInterval(clear)
// })
// btn_reset.addEventListener('click',()=>{
//     i = 0;
//     hour.innerHTML = i;
// })
// function kutish(){
//     alert("kutish vaqti tugadi");
// }
// setTimeout(kutish,2000)

let btn_all = document.querySelectorAll(".btn_all");
btn_all.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.textContent);
        btn_all.forEach((post)=>{
            post.classList.remove("activ")
        })
        e.target.classList.add("activ")
        e.target.remove()
    })
})   

