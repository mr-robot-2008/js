// Maximum Sum Subsequence with no adjacent elements

<script>

// JavaScript code to implement the approach

// Function to find the maximum sum
function findMaxSum(arr, N)
{

	// Declare dp array
	let dp = new Array(N);
	for(let i = 0; i < N; i++)
	{
		dp[i] = new Array(2);
	}
	if (N == 1)
	{
		return arr[0];
	}

	dp[0][0] = 0;
	dp[0][1] = arr[0];

	// Loop to find the maximum possible sum
	for (let i = 1; i < N; i++) {
		dp[i][1] = dp[i - 1][0] + arr[i];
		dp[i][0] = Math.max(dp[i - 1][1],
					dp[i - 1][0]);
	}

	// Return the maximum sum
	return Math.max(dp[N - 1][0], dp[N - 1][1]);
}

// Driver Code

// Creating the array
let arr = [ 5, 5, 10, 100, 10, 5 ];
let N = arr.length;

// Function call
document.write(findMaxSum(arr, N),"</br>");


</script>
