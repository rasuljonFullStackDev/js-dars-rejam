let load = document.querySelector(".load");

const yangilanish = () => {
    setTimeout(() => {
        load.classList.add("activ")
    }, 1000)
}
let mevalar = [
    {
        id: 0,
        name: "shaftoli",
        narxi: 15,
        count: 0,
        img: "./img/1.png",
        like: true,
        chegirma: 15
    },
    {
        id: 1,
        name: "shaftoli 1",
        narxi: 15,
        count: 0,
        img: "./img/2.png",
        like: true,
        chegirma: 15
    },
    {
        id: 2,
        name: "shaftoli 2",
        narxi: 15,
        count: 0,
        img: "./img/3.png",
        like: true,
        chegirma: 15
    },
    {
        id: 3,
        name: "shaftoli 3",
        narxi: 25,
        count: 0,
        img: "./img/4.png",
        like: true,
        chegirma: 18
    },
    {
        id: 4,
        name: "shaftoli 5",
        narxi: 25,
        count: 0,
        img: "./img/5.png",
        like: true,
        chegirma: 15
    }
];

let cards = document.querySelector(".cards");
function mevalarBaza() {
    cards.innerHTML = ""
    mevalar.forEach((meva, i) => {
        cards.innerHTML += `
        <div class="card">
        <div class="card-header">
            <p>${meva.chegirma}%Off</p>
            <button onclick="like(${i})" style="background:${meva.like ? "" : "red"}"  class="likes">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M12.7503 0.5C11.3003 0.5 9.90866 1.175 9.00033 2.24167C8.09199 1.175 6.70033 0.5 5.25033 0.5C2.68366 0.5 0.666992 2.51667 0.666992 5.08333C0.666992 8.23333 3.50033 10.8 7.79199 14.7L9.00033 15.7917L10.2087 14.6917C14.5003 10.8 17.3337 8.23333 17.3337 5.08333C17.3337 2.51667 15.317 0.5 12.7503 0.5ZM9.08366 13.4583L9.00033 13.5417L8.91699 13.4583C4.95033 9.86667 2.33366 7.49167 2.33366 5.08333C2.33366 3.41667 3.58366 2.16667 5.25033 2.16667C6.53366 2.16667 7.78366 2.99167 8.22533 4.13333H9.78366C10.217 2.99167 11.467 2.16667 12.7503 2.16667C14.417 2.16667 15.667 3.41667 15.667 5.08333C15.667 7.49167 13.0503 9.86667 9.08366 13.4583Z" fill="#7FAD39"/>
            </svg>
            </button>
        </div>
        <div class="card-body">
            <img src="${meva.img}" alt="">
            <h2>${meva.name}</h2>
               <p>$${parseInt(meva.narxi - (meva.narxi / 100 * meva.chegirma))} <s>$${meva.narxi}</s></p>
        </div>
        <div class="card-footer">
            <div class="count">
                <button class="btn btn-minus" onclick="minus(${i})">-</button>
                <p>${meva.count}</p>
                <button class="btn btn-plus" onclick="plus(${i})">+</button>
            </div>
            <div>
                <button onclick="modalFun(${i})"><img src="img/savat.svg" alt=""></button>
            </div>
        </div>
    </div>
        `
    })
}
mevalarBaza()
const minus = (i) => {
    console.log();
    if (mevalar[i].count > 0) {
        mevalar[i].count = mevalar[i].count - 1
    }
    mevalarBaza()
}
const plus = (i) => {
    console.log();
    mevalar[i].count = mevalar[i].count + 1
    mevalarBaza()
}
// maxsulot narxini korish
let modal = document.querySelector(".modal"),
    modal_body = document.querySelector(".modal_body"),
    close = document.querySelector(".close"),
    modal_data = document.querySelector(".modal_data"),
    shop = document.querySelector(".shop");

const modalFun = (i) => {
    modal.classList.add("activ")
    modal_body.classList.add("activ");
    let baza = `
    <h1>${mevalar[i].name}</h1>
    <img src="${mevalar[i].img}" alt="">
    <p>soni: <span>${mevalar[i].count}</span> </p>
    <p>narxi : <span>$${mevalar[i].count * parseInt(mevalar[i].narxi - (mevalar[i].narxi / 100 * mevalar[i].chegirma))} </span></p>
    `
    modal_data.innerHTML = baza;
}
close.addEventListener('click', () => {
    modal.classList.remove("activ")
    modal_body.classList.remove("activ")
})

// like 
let likes = document.querySelectorAll(".likes"),
    like_count = document.querySelector(".like_count");
function likeCounts() {
    let s = mevalar.filter((val) => {
        return val.like == false
    }).length;
    like_count.innerHTML = s
}
likeCounts()
const like = (i) => {
    console.log(i);
    console.log(mevalar[i].like);
    if (mevalar[i].like) {
        mevalar[i].like = false;
    } else {
        mevalar[i].like = true;
    }
    likeCounts()
    mevalarBaza()
}

// umumiy maxsulotlarni narxi

let modal1 = document.querySelector(".modal1"),
    modal_body1 = document.querySelector(".modal_body1"),
    savat = document.querySelector(".savat"),
    close1 = document.querySelector(".close1ss"),
    table = document.querySelector(".table"),
    savatcha = document.querySelector(".savatcha")
    ;
savat.addEventListener('click', () => {
    modal1.classList.add("activ");
    modal_body1.classList.add("activ");
    let hisobot = mevalar.filter((value) => {
        return value.count > 0
    }),
        atchot = 0;
    hisobot.forEach((val) => {
        atchot += parseInt(val.narxi - val.narxi / 100 * val.chegirma) * val.count
    })

    hisobot.forEach((savat, i) => {
        table.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td><img src='${savat.img}' /></td>
            <td>${savat.name}</td>
            <td><s>${savat.narxi}</s> ${parseInt(savat.narxi - savat.narxi / 100 * savat.chegirma)}</td>
            <td>${savat.count}</td>
            <td>${parseInt(savat.narxi - savat.narxi / 100 * savat.chegirma) * savat.count}$</td>
         </tr>
        `
    })
    savatcha.innerHTML = `<h1 class='xarajat'>Umumiy xarid: <span>${atchot}$</span></h1> 
    `
})
// likelar soni va like bosilgan maxsulotlar
function hisobotBaza(){
    let likeTrue = mevalar.filter((val) => {
        return val.like === false
    })
    likeTrue.forEach((savat, i) => {
        table.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td><img src='${savat.img}' /></td>
            <td>${savat.name}</td>
            <td><s>${savat.narxi}</s> ${parseInt(savat.narxi - savat.narxi / 100 * savat.chegirma)}</td>
            <td>${savat.count}</td>
            <td>${parseInt(savat.narxi - savat.narxi / 100 * savat.chegirma) * savat.count}$</td>
         </tr>
        `
        savatcha.innerHTML = `<h1 class='xarajat'>Like: <span>${likeTrue.length}</span></h1> `
    }) 
}
let btn_like = document.querySelector(".btn_like");
btn_like.addEventListener('click', () => {
    table.innerHTML = ""
    modal1.classList.add("activ");
    modal_body1.classList.add("activ");
    
})

// mevaler va like modal oynani yopish
close1.addEventListener('click', () => {
    modal1.classList.remove("activ")
    modal_body1.classList.remove("activ")
})