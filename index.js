function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};
  for (const number of array){
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
 // O(n)
*/

/* 
  Add your pseudocode here
   // Create an empty hash map to store seen numbers
   // Iterate through each number in the array
   // Calculate the complement needed to reach the target
   // Check if the complement is in the seenNumbers hash map
   // A pair has been found, return true
   // Add the current number to the seenNumbers hash map
   // No pair was found, return false
*/

/*
  Add written explanation of your solution here
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
