console.log("This file name is Web_Dev_53.js");

function greet(name,greetText="Greetings from JavaScript")
{
    console.log(greetText+" "+name);
    console.log(name+" is a good boy");
}

function sum(a,b,c)
{
    let d=a+b+c;
    return d;

    // This line will never execute(unreachable code )
    console.log("Function is returned");
}
let name1="Harry";
let name2="Shubham";
let name3="Rohan";
let name4="Anand";
let greetText="Good Morning";
console.log(name1 +" is a good boy");
console.log(name2+" is a good boy");
console.log(name3+" is a good boy");
console.log(name4+" is a good boy");
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);

// if greetText is not passed then it will take the parametrized value 
greet(name4);

let returnVal= sum(10,20,30);
console.log(returnVal);

