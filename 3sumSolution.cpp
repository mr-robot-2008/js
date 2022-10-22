#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        
        int s = nums.size();
        sort(nums.begin(),nums.end());
        vector<vector<int>> ans;
        
        for(int i = 0 ; i < s - 2 ; i++){
            if(i == 0 || (i > 0 && nums[i] != nums[i-1])){
                int low = i + 1  , hi = s - 1 , sum = 0 -nums[i];
                while(low < hi)
                {
                    if(nums[low] + nums[hi] == sum ){
                        vector<int> temp ;
                        temp.push_back(nums[i]);
                        temp.push_back(nums[low]);
                        temp.push_back(nums[hi]);
                        ans.push_back(temp);
                        
                        while(low < hi && nums[low] == nums[low + 1 ]) low++;// for siding the duplicates
                        while(low < hi && nums[hi] == nums[hi - 1]) hi--;// for siding the duplicates
                        
                        low++ , hi--;
                    }
                    else if(nums[low] + nums[hi] < sum) low++;
                    else hi--;
                }   
                
            }
        }
        
        
        
        return ans;
        
    }
};