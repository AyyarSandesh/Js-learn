

// function add(a,b,c){
//     return a+b+c;
// }

// function add(a,b,c,d){
//     return a+b+c+d;
// }
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(add(10,20,30,40));
// console.log(add(10,20,30));


// arguments keyword
// function add(){
//     sum=0;
//     for(i of arguments){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(add(10,20));
// console.log(add(10,20,30,40));
// console.log(add(10,20,30));

//arguments keyword with arrow function not allowed
// let add=()=>{
//     sum=0;
//     for(i of arguments){
//         sum+=i;

//     }
//     return sum;
// }
// console.log(add(10,20));
// console.log(add(10,20,30,40));
// console.log(add(10,20,30));


// spread operator
// function add(...args){
//     sum=0;
//     for(i of args){
//         sum+=i;

//     }
//     return sum;
// }
// console.log(add(10,20));
// console.log(add(10,20,30,40));
// console.log(add(10,20,30));


//spread operator with arrow function
// let add=(...args)=>{
//     sum=0;
//     for(i of args){
//         sum+=i;

//     }
//     return sum;
// }
// console.log(add(10,20));
// console.log(add(10,20,30,40));
// console.log(add(10,20,30));



//this keyword in regular and arrow function
s1={
    name:"sandesh",
    roll:101,
    f1:function(){
        console.log("regular ",this.name);//regular  sandesh
        console.log(this);//{ name: 'sandesh', roll: 101, f1: [Function: f1], f2: [Function: f2] }
    },
    f2:()=>{
        console.log("Arrow",this.name);//Arrow undefined
        console.log(this);//{}
    }
}
s1.f1();
s1.f2();