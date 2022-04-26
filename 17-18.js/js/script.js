// localStorage.setItem("name","salom");
// let oby = {
//     name:"Bobur",
//     age:24
// }
// localStorage.setItem('oby',JSON.stringify(oby))
// // localStorage.removeItem('oby')
// let a = JSON.parse(localStorage.getItem('oby'));
// console.log(a);


function first(elm) {
    return document.querySelector(elm)
}
function more(elm) {
    return document.querySelectorAll(elm)
}

let dataStorage = JSON.parse(localStorage.getItem('data')) || [];
let tbody = first(".tbody");
// baza
function localStorageData() {
    dataStorage = JSON.parse(localStorage.getItem('data')) || [];
    tbody.innerHTML = ""
    if (dataStorage.length === 0) {
        tbody.innerHTML = "<tr><td colspan='4'>Malumot topilmadi</td></tr>"
    } else {
        dataStorage.forEach((val, i) => {
            tbody.innerHTML += `
            <tr>
                <td><img src="img/icon/profile.png" alt=""></td>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.phone}</td>
                <td>
                <button  onclick="editStorage(${i})"> <img src="img/icon/pen 1.svg" alt=""></button>
                <button onclick="deleteStorage(${i})"> <img src="img/icon/trash 1.svg" alt=""></button>
                </td>
            </tr>
        `
        })
    }
}
localStorageData();

let data = {
    
}, btnAdd = first(".btnAdd"), index = null, modal_name = first('.modal_name');
let modal = first(".modal"), modal_body = first(".modal_body"),
    add = first(".add"),
    close = first(".close"), form = first(".form");

add.addEventListener('click', () => {
    modal.classList.add('activ');
    modal_body.classList.add('activ');
})
// modal yopish 
close.addEventListener('click', () => {
    modal.classList.remove('activ');
    modal_body.classList.remove('activ');
    index = null;
    btnAdd.innerHTML = "ADD";
    modal_name.innerHTML = "ADD STUDENT";
    input.forEach((val, k) => {
        val.value = "";
    })

})
// malumot qoshish
//agar index null ga teng bulmasa malumot qoshiladi aks holad edit boladi
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(data);
    if (index === null) {
        if (localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify(
                [...JSON.parse(localStorage.getItem('data')), data]
            ))
        } else {
            localStorage.setItem('data', JSON.stringify([data]))
        }
        e.target.reset();
        modal.classList.remove('activ');
        modal_body.classList.remove('activ');
        localStorageData();
    } else {
        if (localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify(
                [...dataStorage.slice(0, index), data, ...dataStorage.slice(index + 1, dataStorage.length)]
            ));
        }
        e.target.reset();
        modal.classList.remove('activ');
        modal_body.classList.remove('activ');
        localStorageData();
        btnAdd.innerHTML = "ADD";
        modal_name.innerHTML = "ADD STUDENT";
        index = null
    }

})
let input = more(".input");
input.forEach((val) => {
    val.addEventListener('change', (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        data = {
            ...data, [e.target.name]: e.target.value
        }

    })
})
// delete
function deleteStorage(i) {
    console.log(dataStorage.slice(i, i + 1));
    localStorage.setItem('data', JSON.stringify(
        [...dataStorage.slice(0, i), ...dataStorage.slice(i + 1, dataStorage.length)]
    ));
    localStorageData()
}
// edit
function editStorage(i) {
    add.click();
    modal_name.innerHTML = "EDIT STUDENT"
    btnAdd.innerHTML = "EDIT";
    index = i;
    input.forEach((val) => {
        val.value = dataStorage[i][val.name];
    })

}

// filter qilish namega qarab
// indexOf malumot qidirish 
// "name".toLowerCase().indexOf("s") =>agar name ichida s boladigna bolsa butun son qaytaradi aks holda -1 qaytaradi

let inputs = first(".inputs");
inputs.addEventListener('input',(e)=>{
    if(e.target.value === ""){
        localStorageData() /// inputda qiymat bolmasa bazanizni ishga tushuradi
    }else{
        // inputda qiymat bolganda filter qiladi
        let datas = dataStorage.filter((val)=>{
            return val.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !==-1
            /// loclastorage malumotni ichidagi namemi biz kiritgan inputni valuesiga oxshash bolsa filter qilib massiv qaytaradi
        })
        // filter qilingan massivimizni uzunligini 0 ga teng bolsa malumot toplimadi 
        if(datas.length===0){
            tbody.innerHTML = "<tr><td colspan='4'>Malumot topilmadi</td></tr>"
        }else{
        // filter qilingan massivimizni uzunligini 0 ga teng  bolsamasa malumot chiqadi 
            tbody.innerHTML = ""/// bu har safar filter qilganda tbadyni qiymatini tozalab turadi
            datas.forEach((val, i) => {
                tbody.innerHTML += `
                <tr>
                    <td><img src="img/icon/profile.png" alt=""></td>
                    <td>${val.name}</td>
                    <td>${val.email}</td>
                    <td>${val.phone}</td>
                    <td>
                    <button  onclick="editStorage(${i})"> <img src="img/icon/pen 1.svg" alt=""></button>
                    <button onclick="deleteStorage(${i})"> <img src="img/icon/trash 1.svg" alt=""></button>
                    </td>
                </tr>
            `
            })
        }

    }
})

// object uzunligi
input.forEach((val)=>{
    console.log(val.name);
    data = {...data,[val.name]:""}
})
console.log(data);
const objectLength = (obj,errObj) =>{
    let     
    res = {};
    for(let key in errObj){
         if(obj[key].trim() === "" ){
            res = {...res,[key]: `${key} xatolik bor`}
         }
    }
    return res;
}
 let err = objectLength({name:"ali",email:" s",phone:""},data)
 console.log(err);

//  let data1 = [1,5,{id:0,age:25}];
//  localStorage.setItem('a',JSON.stringify(data1))
//  if(localStorage.getItem('a')){
//      localStorage.setItem('a',JSON.stringify([
//          ...JSON.parse(localStorage.getItem('a')),"5"
//      ]))
//  }else{
//  localStorage.setItem('a',JSON.stringify([]))
//  }