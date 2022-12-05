# Find Missing Element
def findMissing(arr, N):

	
	temp = [0] * (N+1)

	for i in range(0, N):
		temp[arr[i] - 1] = 1

	for i in range(0, N+1):
		if(temp[i] == 0):
			ans = i + 1

	print(ans)


if __name__ == '__main__':
	arr = [1, 2, 3, 5]
	N = len(arr)

	# Function call
	findMissing(arr, N)

	