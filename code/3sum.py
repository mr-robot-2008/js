n= int(input("size of list"))
nums = []
for i in range(n):
    k = int(input("enter number"))
    nums.append(k)
nums.sort()
forder = [] #list of lists already done
for s1 in range(0,len(nums)-2):
    for s2 in range(s1,len(nums)-1):
        a = nums[s1]
        b = nums[s2]
        c = -a-b
        if c in nums[s2+1:]:
            k = [a,b,c]
            if k not in forder:
                forder.append(k)
            else:
                continue
        else:
            continue

print(forder)
