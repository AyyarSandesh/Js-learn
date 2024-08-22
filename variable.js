fullName="Sandesh Ayyar"
console.log("Hello ",fullName)      //Hello Sandesh Ayyar
$fullName="Sandesh Ayyar"
console.log("Hello "+$fullName)     //Hello Sandesh Ayyar
_fullName="Sandesh Ayyar"
console.log("Hello "+_fullName)     //Hello Sandesh Ayyar
fullName12="Sandesh Ayyar"
console.log("Hello "+fullName12)    //Hello Sandesh Ayyar


//not valid
// 123fullName="Sandesh Ayyar"
// @fullName="Sandesh Ayyar"
// 123="sandesh Ayyar"


// let, var and const
console.log("var keyword");
var age=12
console.log(age);
var age=13
{
    age=14
    console.log(age);
    var age=13;
    console.log(age);
}
console.log(age);


console.log("let keyword")
let age=12
console.log(age);
// let age=13
{
    // age=14
    // console.log(age);
    let age=13;
    console.log(age);
    {
        // console.log(age);
        let age=13;
        console.log(age);
    }
    age=14
    console.log(age)
}
console.log(age);


console.log("const keyword");
const age=12;
// age=13;
console.log(age);
{
    const age=13
    console.log(age);
    {
        // const age=15;
        console.log(age);
        // const age=13
    }
}
console.log(age);