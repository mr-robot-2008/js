// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
// User function Template for C++

class Solution{
public:
    vector<int> minPartition(int x)
    {
        vector<int>st;
        int a[]={1,2,5,10,20,50,100,200,500,2000};
    int n=10;

sort(a,a+n,greater<int>());
int ans=0;
for(int i=0;i<n;i++){
    // int res=x/a[i];
    // if(res>0 ){
    // ans=ans+res;
    //  x=x%a[i];
    //  st.push_back(a[i]);
    // }
      while (x >= a[i]) {
            x -= a[i];
            st.push_back(a[i]);
        }
    
}


return st;
    }
};

// { Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        vector<int> numbers = ob.minPartition(N);
        for(auto u: numbers)
            cout<<u<<" ";
        cout<<"\n";
    }
    return 0;
}  // } Driver Code Ends
