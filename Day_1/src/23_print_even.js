// 23. Create a module that prints the first 20 even numbers. Import and run it in another 
// file. 


function Check() {
    console.log(`First 20 Even Numbers :`)
    let num = 2;
    let count = 0;
    while(count < 20) {
        console.log(num);
        num += 2;
        count++;
    }
}
module.exports = {Check};