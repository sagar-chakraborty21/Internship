// 2. Create a module that prints all even numbers between 1 and 50 using a loop. Import 
// and run it in app.js. 


function Check(){
    console.log("Even numbers between 1 to 50 are:");
    for(let i=1; i<=50; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

module.exports = {Check};