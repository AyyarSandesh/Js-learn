// let age=12;
// console.log(typeof age);//number
// let price=100.50
// console.log(typeof price);//number

// //string
let Name="tony"
console.log(typeof Name);
console.log("hello", Name);
console.log("hello "+Name);
console.log(`hello ${Name}`);

// //boolean
// let isFollow=true;
// console.log(typeof isFollow);

// //undefined
// let x;
// console.log(typeof x);

// //null
// let y=null
// console.log(typeof y);

// //Bigint
// let a=BigInt(123);
// console.log(a);
// let b=BigInt("123");
// console.log(typeof b, b);

// //symbol
// let c=Symbol("Hello");
// console.log(typeof c,c);
// let d=Symbol(123);
// console.log(typeof d,d);

//non-primitive data type
a=[1,2,3,"sandesh"];
console.log(typeof a);

let student={
    name:"sandesh",
    age:12,
    fun(){
        console.log("hello");
    },
}
student.fun();
console.log(typeof student)