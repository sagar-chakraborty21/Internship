// 12. Write a function inside a module to check if a number exists in an array. Import it and 
// test in another file. 


function Check(a, number) {
    console.log("Array : " + a);
    for(let i=0; i<a.length; i++) {
        if(number === a[i]) {
            console.log(`${number} Exist in The Array.`);
            return;
        }
    }
    console.log(`${number} Did Not Exist in The Array.`);
}
module.exports = {Check};