// 7. Create a module to find the sum of all odd numbers in an array and export it for use 
// in another file. 


function Check(a){
    console.log(`Array : ${a}`);
    let sum=0;
    for(let n of a){
        if(n%2!==0){
            sum=sum+n;
        }
    }
    console.log(`Sum of odd numbers in the array is : ${sum}`);
}

module.exports= {Check};