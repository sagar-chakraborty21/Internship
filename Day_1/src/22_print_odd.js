// 22. Create a module that prints the first 20 odd numbers. Import and run it in another file. 


function Check() {
    console.log(`First 20 Odd Numbers :`)
    let num = 1;
    let count = 0;
    while(count < 20) {
        console.log(num);
        num += 2;
        count++;
    }
}
module.exports = {Check};