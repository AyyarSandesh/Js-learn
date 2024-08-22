// let marks=[98,65,45,34,23];
// console.log(marks);
// console.log(typeof marks);
// console.log(marks[0]);
// console.log(marks[4]);
// console.log(marks[10]);
// console.log(marks.length);
// marks[10]=12;
// console.log(marks[10]);
// console.log(marks.length);
// console.log(marks);
//

//looping in array
//for loop
// let heros=["iron man","hult","thor"];
// for(let inx=0;inx<heros.length;inx++){
//     console.log(heros[inx]);//iron man, hulk, thor
// }

// for of loop
// let heros=["iron man","hult","thor"];
// for(let hero of heros){
//     console.log(hero);//iron man, hulk, thor
// }


// for in loop
// let heros=["iron man","hult","thor"];
// for(let hero in heros){
//     console.log(hero);//0,1,2
//     console.log(heros[hero]);//iron man, hulk, thor
// }


//built in method in js
//push()
// let foodItem=["potato","chili","apple","lichi","tomato"];
// console.log(foodItem);//[ 'potato', 'chili', 'apple', 'lichi', 'tomato']
// foodItem.push("burger");
// console.log(foodItem);//[ 'potato', 'chili', 'apple', 'lichi', 'tomato', 'burger' ]
// foodItem.push("orange","mango");
// console.log(foodItem);//['potato', 'chili','apple',  'lichi','tomato', 'burger','orange', 'mango']

//pop()
// let foodItem=["potato","chili","apple","lichi","tomato"];
// console.log(foodItem);//[ 'potato', 'chili', 'apple', 'lichi','tomato' ];
// console.log(foodItem.pop());//tomato
// console.log(foodItem);//[ 'potato', 'chili', 'apple', 'lichi' ]

//toString()
// let foodItem=["potato","chili","apple","lichi","tomato"];
// console.log(foodItem);//[ 'potato', 'chili', 'apple', 'lichi', 'tomato' ]
// console.log(foodItem.toString());//potato,chili,apple,lichi,tomato
// console.log(foodItem);//[ 'potato', 'chili', 'apple', 'lichi', 'tomato' ]


//concat();
// let marvelHeroes=["iron man","thor","spider man","hulk"];
// let dcHeroes=["superman","batman"];
// let indianHeroes=["neeraj chopra"];

// let allHeroes=marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(allHeroes);//['iron man','thor','spider man','hulk','superman','batman','neeraj chopra']
// let heroes=marvelHeroes.concat(dcHeroes);//
// console.log(heroes);//[ 'iron man', 'thor', 'spider man', 'hulk', 'superman', 'batman' ]


//unshift()
// let marvelHeroes=["iron man","thor","spider man","hulk"];
// console.log(marvelHeroes);
// marvelHeroes.unshift("saM","sanj");//[ 'iron man', 'thor', 'spider man', 'hulk' ]
// console.log(marvelHeroes);//[ 'saM', 'sanj', 'iron man', 'thor', 'spider man', 'hulk' ]
// marvelHeroes.unshift("sam","sanj");
// console.log(marvelHeroes);//['sam','sanj','saM','sanj','iron man','thor','spider man','hulk']


//shift();
// let marvelHeroes=["iron man","thor","spider man","hulk"];
// let val=marvelHeroes.shift();
// console.log("deleted ",val);//deleted  iron man
// console.log(marvelHeroes);//[ 'thor', 'spider man', 'hulk' ]

//slice()
// let marks=[97,98,74,65,67];
// console.log(marks.slice(1,4));//[ 98, 74, 65 ]
// console.log(marks.slice(2));//[ 74, 65, 67 ]
// console.log(marks);//[ 97, 98, 74, 65, 67 ]


//splice()
//splice(startInx,delind,new);
// let marks=[1,2,3,4,5,6,7,8,9,10];
// marks.splice(4);
// console.log(marks);//[ 1, 2, 3, 4 ]


// let marks=[1,2,3,4,5,6,7,8,9,10];
// marks.splice(2,2,100,200);
// console.log(marks);//[1, 2, 100, 200,  5, 6, 7,   8,   9, 10]

// let marks=[1,2,3,4,5,6,7,8,9,10];
// marks.splice(3,1);
// console.log(marks);//[1, 2, 3,  5, 6,7, 8, 9, 10]

// let marks=[1,2,3,4,5,6,7,8,9,10];
// marks.splice()
// console.log(marks);//[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]