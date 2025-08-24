// 3. Create a module that prints all odd numbers between 1 and 50 using a loop. Import 
// and test it in another file. 


function Check(){
    console.log("Even numbers between 1 to 50 are:");
    for(let i=1; i<=50; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

module.exports = {Check};