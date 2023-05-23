//this is a greedy problem, hence to achive optminal sol we'll ue Dynamic programming.

//Approach 

// Airport:   0   1   2   3   4   5
// Fuel:     [2,  1,  2,  3,  1]

// dp:       [0, Inf,Inf,Inf,Inf] -----> result dp => [0,  1,  1,  2,  2]

// takes an array fuel as input
function minimumPlanesNeeded(fuel) {
    const n = fuel.length;
    // if the length of the fuel array is 0. If it is, we return -1 since there are no airports.
    if (n === 0) {
      return -1;
    }
  
    // an array dp of size n (number of airports) and initialize all elements to a large value (Number.MAX_VALUE). This array will store the minimum planes needed to reach each airport.
    const dp = new Array(n).fill(Number.MAX_VALUE);
    dp[0] = 0; // since no planes are needed to reach the first airport.
  
    // Iterate through each airport
    for (let i = 1; i < n; i++) {
      // Check all the previous airports and update the minimum planes needed
      for (let j = 0; j < i; j++) {
        // If it's possible to reach airport i from airport j (i.e., j + fuel[j] >= i), we update dp[i] to the minimum between its current value and dp[j] + 1. This means we consider hiring a new plane at airport j and add 1 to the minimum planes needed to reach airport j.
        if (j + fuel[j] >= i) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
    //dp[n - 1] as the minimum planes needed to reach the last airpot 
    return dp[n - 1] === Number.MAX_VALUE ? -1 : dp[n - 1];   //if val is still -1 ; unreachable destination.
  }
  
  const fuel = [2, 1, 2, 3, 1];
  const result1 = minimumPlanesNeeded(fuel);
  console.log(result1);  // Output: 2
  
  const fuel2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
  const result2 = minimumPlanesNeeded(fuel2);
  console.log(result2);  // Output: 3
  

  