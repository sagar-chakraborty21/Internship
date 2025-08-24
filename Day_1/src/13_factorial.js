// 13. Create a module to calculate the factorial of a given number using a loop. Import and 
// test it. 



function Check(i){
    if(i < 0){
        console.log("Factorial is not defined for negative numbers");
        return;
    }
    let fact = 1;
    for(let j=1; j<=i; j++){
        fact *= j;
    }
    console.log(`Factorial of ${i} is : ${fact}`);
}
module.exports = {Check};