// //synchronous code
// console.log("one");
// console.log("Two");
// console.log("Three");

// //asynchronous code
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("three")
// },4000);
// console.log("four");


//call back
//without callback
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },3000);
// }

// getData(1);
// getData(23);
// getData(234);


//with callback hell
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },3000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     })
// })


// //promises
// let promise=new Promise((resolve,reject)=>{
//     console.log("Its a promise");
//     // resolve("Success");
//     reject("error")
// });
// console.log(promise);



// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId);
//             // resolve("success");
//             reject("error");
//         },5000);
//     }); 
// }
// let p=getData(1);


// const getPromise=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("I am a promise");
//             // res("success");
//             rej("Network error");
//         },3000);

//     });
// }
// let promise=getPromise().then((res)=>{
//     console.log("Promise fulfilled",res);
// }).catch((err)=>{
//     console.log("Rejected ",err);
// }).finally(()=>{
//     console.log("task was attempted");
// })

// another way 
// const getPromise=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("I am a promise");
//             res("success");
//             // rej("Network error");
//         },3000);

//     });
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled",res);
// });
// promise.catch((err)=>{
//     console.log("Rejected ",err);
// });
// promise.finally(()=>{
//     console.log("task was attempted");
// });



// promise chaining

// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data1...!");
// asyncFun1().then((res)=>{
//     console.log("fetching data2...!");
//     asyncFun2().then((res)=>{})
// })


// example 2
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataId);
//             resolve("success");
//         },2000)
//     });
// }

// getData(1).then(()=>{
//     return getData(2);
// }).then(()=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })



// async and await 
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData(){
//     await api(1);
//     await api(2);
// }
// getAllData();


//example 2
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
// }
// getAllData();

// using IIFE 
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// (async ()=>{
//     await getData(1);
//     await getData(2);
// })();