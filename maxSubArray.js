/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  const len = nums.length;
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > max) max = nums[i];
  }

  return max;
};