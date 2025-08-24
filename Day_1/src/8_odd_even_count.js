// 8. Write a module that counts total even and odd numbers in an array. Import and test it 
// in index.js. 


function Check(n){
    console.log(`Array : ${n}`);
    let odd_count = 0;
    let even_count = 0; 
    for(let num of n){
        if(num % 2 === 0){
            even_count++;
        } else {
            odd_count++;
        }
    }
    console.log(`Count of odd numbers : ${odd_count}`);
    console.log(`Count of even numbers : ${even_count}`);
}
module.exports = {Check};
