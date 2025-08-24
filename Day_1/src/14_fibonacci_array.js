// 14. Write a module that generates the first 10 Fibonacci numbers. Import and run it. 


function Check() {
    const f = [];
    f[0] = 0;
    f[1] = 1;
    for(let i=2; i<10; i++) {
        f[i] = f[i-1] + f[i-2];  //1
    }
    console.log(`First 10 Fibonacci Numbers: ${f}`);
}
module.exports = {Check};