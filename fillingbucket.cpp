class Solution {
  public:
    int solve(int N,int dp[]){

       

       if(N==1) return 1;

       if(N==2) return 2;

        if(dp[N]!=-1) return dp[N];

        

        return dp[N]=(solve(N-1,dp)+solve(N-2,dp))%100000000;

        

    }

    int fillingBucket(int N) {

        int dp[N+1];

        memset(dp,-1,sizeof(dp));

        int sum=0;

        int ways=0;

        

        return solve(N,dp);

    }
};
