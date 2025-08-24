// 6. Create a module to find the sum of all even numbers in an array. Import it into a 
// separate file. 


function Check(arr) {
   console.log(`Array : ${arr}`);
   let sum = 0;
   for(let n of arr) {
      if(n % 2 === 0) {
         sum += n;
      }
   }
   console.log(`Sum of even numbers in the array is : ${sum}`);
}

module.exports = {Check};