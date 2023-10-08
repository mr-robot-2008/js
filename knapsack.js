function max(x, y) {
   return (x > y) ? x : y;
}

function knapSack(W, w, v, n) {
   let K = new Array(n + 1).fill(null).map(() => new Array(W + 1).fill(0));

   for (let i = 0; i <= n; i++) {
      for (let wt = 0; wt <= W; wt++) {
         if (i === 0 || wt === 0)
            K[i][wt] = 0;
         else if (w[i - 1] <= wt)
            K[i][wt] = max(v[i - 1] + K[i - 1][wt - w[i - 1]], K[i - 1][wt]);
         else
            K[i][wt] = K[i - 1][wt];
      }
   }
   
   return K[n][W];
}

function main() {
   console.log("Enter the number of items in a Knapsack:");
   let n, W;
   n = parseInt(prompt());
   let v = new Array(n);
   let w = new Array(n);
   
   for (let i = 0; i < n; i++) {
      console.log("Enter value and weight for item " + i + ":");
      v[i] = parseInt(prompt());
      w[i] = parseInt(prompt());
   }

   console.log("Enter the capacity of knapsack:");
   W = parseInt(prompt());

   console.log(knapSack(W, w, v, n));
}

main();
