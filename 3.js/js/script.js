// let a = 5, b = 5;
// if(a>b){
//     console.log(`${a} katta son`);
// }else if(a < b) {
//     console.log(`${b} katta son`);

// }else{
//     console.log(`teng`);
// }
// ==
// >=
// <=
// !==
// ===
// a>b>c
// a>b && b>c
// 1.ixtiyoriy son kiritlganda qaysi kunligi chiqsin
// a = 365 % 7

// let son = "Ali";
// switch(son){
//     case 1:{console.log(1); break;}
//     case 2:{console.log(2); break;}
//     case 3:{console.log(3); break;}
//     case 4:{console.log(4); break;}
//     case 5:{console.log(5); break;}
//     case 6:{console.log(6); break;}
//     case 7:{console.log(7); break;}
//     case 8:{console.log(8); break;}
//     case "Ali":{console.log("Ali"); break;}
//     default : {console.log("bunday son yo`q"); break;}
// }
// String metodlari
// Let text = “String metodlari”
// text.length=>matnni uzunligi
// text.toLowerCase()
// text.toUpperCase()
// text.slice(7,8)
// 1 "1"
// let matn  = "Lorem ipsum dolor. HFJHKDFKDSFNKJDSFB"
// console.log(matn);
// console.log(matn.length);
// console.log(matn.toLowerCase());
// console.log(matn.toUpperCase());
// console.log(matn.slice(0,5));
// console.log(matn.slice(0,5).toUpperCase());
// let data = new Date();
// console.log(data);
// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getMilliseconds());
// console.log(data.getMinutes());
// let time =  + data.getHours() + " : " + data.getMinutes();
// console.log(time);



// let x = -5;
// if(x>0){
//     console.log(2 * Math.sin(x));
// }else if(x<=0){
//     console.log(x - 6);
// }

// let a =-1;
// if(a>=0){
//     console.log(++a);
// }else {
//     console.log(a);
// }


let a = 4.5;
if(a > 0 && a % 1 == 0){
    console.log(a + 1);
}
else{
    console.log(a - 2);
}