
let data = [1,2,-55,55,12,13];
let data1 = [
    {
        id:0,
        name:"ALI",
        count:2,
        like:true
    },
    {
        id:1,
        name:"Bahrom",
        count:5,
        like:false
    },
    {
        id:3,
        name:"Humoyun",
        count:2,
        like:true
    },
    {
        id:4,
        name:"Kamol",
        count:6,
        like:true
    },
    {
        id:5,
        name:"sarvar",
        count:2,
        like:false
    }
]
console.log(data);
let s = data.filter((value)=>{
    return value > 10 && value <20
})
let k = data1.filter((humoyun)=>{
        return humoyun.like == true && humoyun.count > 5
})

console.log(s);
console.log(k);