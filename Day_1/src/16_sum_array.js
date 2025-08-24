// 16. Write a module that calculates the sum of all numbers in an array using a loop. 
// Import and test it. 


function Check(a) {
    console.log(`Array : ${a}`);
    let sum = 0;
    for(let i=0; i<a.length; i++) {
        sum+=a[i];
    }
    console.log(`Sum of All Numbers : ${sum}`);
}
module.exports = {Check};