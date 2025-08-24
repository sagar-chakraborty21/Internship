// 10. Write a module to find the smallest number in an array. Import and check with 
// different inputs. 


function Check(n){
    if (n.length === 0){
        console.log("Array is empty");
        return;
    }
    let smallest = n[0];
    for(let i=1; i<n.length; i++){
        if(n[i] < smallest){
            smallest = n[i];
        }
    }
    console.log(`Smallest number in the array is : ${smallest}`);
}
module.exports = {Check};