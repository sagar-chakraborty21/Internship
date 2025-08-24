// 5. Write a module that prints all prime numbers between 1 and 100. Import it in another 
// file and execute.


function Check() {
    console.log("Prime Numbers Between 1 to 100 are : ");
    for(let i=1; i<=100; i++) {
        let p = 0;
        if (i <= 1) {
            continue;
        } else {
            for(let num=2; num<i; num++){
                if(i%num === 0) {
                    p = 1;
                    break;
                }
            }
            if(p === 0) {
                console.log(i);
            }
        }
    }
}
module.exports = {Check};