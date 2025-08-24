// 9. Create a custom module to find the largest number in an array and import it in 
// another file. 

function Check(n){
    console.log(`Array : ${n}`);
    if(n.length === 0){
        console.log("Array is empty");
        return;
    }
    let largest = n[0];
    for(let i=1; i<n.length; i++){
        if(n[i] > largest){
            largest = n[i];
        }
    }
    console.log(`Largest number in the array is : ${largest}`);
}
module.exports = {Check};
