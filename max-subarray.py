def msfun(nums):
    ans = nums[0]
    length = len(nums)

    for sub_len in range(1, length + 1):
        subsum = sum(nums[0 : sub_len])
        ans = max(ans, subsum)

        for start_idx in range(1, length):
            if (start_idx + sub_len - 1) < length:
                subsum = subsum - nums[start_idx - 1] + nums[start_idx + sub_len - 1]
                ans = max(ans, subsum)
            else:
                break

    return ans