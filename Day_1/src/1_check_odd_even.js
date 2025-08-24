// 1.Create a custom module to check whether a given number is odd or even, and import 
// it in another file. 

function Check(number) {
    console.log("The Number is :"+ number);
    if (number % 2 == 0) {
        console.log(number + ' is even number');
    }
    else{
        console.log(number + ' is odd number');
    }
}

module.exports = {Check};