function hasTargetSum(array, target) {
  let arr = [];
  for (const num of array) {
    const contain = target - num;
    if (arr.includes(contain)) {
      return true;
    }
    arr.push(num);
  }
  return false;

}

/*
 the bog O complexity of time is  O(n²).
*/

/*
  Add your pseudocode here
*/

/*
  i will try to assign ampty array than i will tray to 
   iterate over the array using the for loop  and than i will 
   subtruct the num from target and register that num 
   in the ampty array and than use if statement to see in
    the other iteration if the second arr contain the result 
    of the new subtruction which is already a registered num 
    in that arr if true it means  mean the original
    array has target sum inside it if false that mean the original
    array has no target sum inside it 
 
 
 
  
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
