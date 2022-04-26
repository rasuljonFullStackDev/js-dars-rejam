// let a = [{name:"ALi",id:5},{name:"anvar",id:7}];
// console.log(a[4]);
// for(let i =0;i<a.length; i++){
//     console.log(a[i]);
// }
// for(let key of a){
//     console.log(key.name);
// }
// let num = 0;
// while(num<5){
//     num++
//     console.log(num);
// }
// do{
//     num++;
//     console.log(num);
// }while(num<5)
// let a1 = 5, b1 = 10, c1 = 0;
// while(a1<b1){
//     a1++;
//     c1++;
// }
// console.log(c1);

// function salom(){
//     console.log("Salom salom");
// }
// salom()
// salom()
// function qoshish(a,b){
//     console.log(a * b);
// }
// qoshish(5,4)
// qoshish(50,44)
// function kalkulator(a,c,b){
//     if(c == "+"){
//         console.log(a+b);
//     }else if(c=="-"){
//         console.log(a-b);
//     } else if(c=="*"){
//         console.log(a*b);
//     }else if(c=="/"){
//         console.log(a/b);
//     }else{
//         console.log("xato");
//     }
    
// }
// kalkulator(10,"+",5)
// kalkulator(10,"*",5)
// kalkulator(+prompt("a"),"*",+prompt("B"))
// // a>b>c

function aniqlash(a,b,c){
    if (a<b&&b<c&&a<c){
        console.log(a,b,c,"b eng katta a eng kichik");
    }
    else if(a>b&&b>c&&a>c){
        console.log(a,b,c,"a eng katta c eng kichik");
    }
    else if(a>b&&b<c&&a>c){
        console.log(a>b<c,"a eng katta b eng kichik");
    }
    else if(a<b&&b>c&&a<c){
        console.log(a<b>c,"b eng katta a eng kichik");
    }
    else if(a==b&&b>c&&a>c){
        console.log(a,b,c,"a teng b ga c eng kichik");
    }
    else if(a==b&&b<c&&a<c){
        console.log(a,b,c,"a teng b ga c eng katta");
    }
    else if(a>b&&b<c&&a==c){
        console.log(a,b,c,"a teng b ga b eng kichik");
    }
    else if(a<b&&b>c&&a==c){
        console.log(a,b,c,"a teng b ga b eng katta");
    }
    else if(a<b&&b==c&&a<c){
        console.log(a,b,c,"c teng b ga a eng kichik");
    }
    else if(a>b&&b==c&&a>c){
        console.log(a,b,c,"c teng b ga a eng katta");
    }
    // else{
    //     console.log(a,b,c,"c teng b ga a eng katta");
    //     console.log(a,b,c,"c teng b ga a eng kichik");
    //     console.log(a,b,c,"c teng a ga b eng katta");
    //     console.log(a,b,c,"c teng a ga b eng katta");
    // }


}

aniqlash (+prompt("a"),+prompt("B"),+prompt("c"))
