//function declaration
// function gretting() {
//   console.log("Hello");
// }
// gretting();//function call/invoke

// let x=function(){
//   console.log("Hello fun!");
// }
// x();








// High order functions in js
//forEach();
// let arr=[1,2,3,4,5,6];
// arr.forEach((val)=>{
//   console.log(val);//1,2,3,4,5,6
// });

// let arr=[1,2,3,4,5,6];
// let calSquare=(num)=>{
//   console.log(num*num);
// };
// arr.forEach(calSquare);//1,4,9,16,25,36

// let arr=[1,2,3,4,5,6];
// let calSquare=(num,inx,arr)=>{
//   console.log(num*num," ",inx," ",arr);
// };
// arr.forEach(calSquare);


// map()
// let nums=[67,52,39];
// let newArr=nums.map((val)=>{
//   return val*2
// }) 
// console.log(newArr);//[ 134, 104, 78 ]

// let nums=[67,52,39];
// let newArr=nums.map((val,inx,nums)=>{
//   console.log(nums," ",inx);
//   return val*2
// }) 
// console.log(newArr);

//filter()
// let nums=[1,2,3,4,5,6,7];
// let evenArr=nums.filter((val)=>{
//   return val%2==0;
// })
// console.log(evenArr)//[ 2, 4, 6 ]


//reduce()
// let arr=[1,2,3,4,5,6];
// const output=arr.reduce((prev,curr)=>{
//   return prev+curr;
// })
// console.log(output);//21


///max element
// let arr=[5,4,7,33,66,3,564,22];
// const output=arr.reduce((prev,curr)=>{
//   return prev>curr ? prev : curr;
// })
// console.log(output);//564
