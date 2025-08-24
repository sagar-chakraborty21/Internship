// 7. Create a module to print the multiplication table of a given number. Import and test in 
// main.js. 


function Check(number) {
    console.log(`Multiplication Table of ${number} :`);
    for(let i=1; i<=10; i++) {
        console.log(`${number} x ${i} = ${number*i}`);
    }
}
module.exports = {Check};