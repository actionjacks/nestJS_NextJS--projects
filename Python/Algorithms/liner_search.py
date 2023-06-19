def search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i


arr = [2, 4, 6, 7, 8, 23, 54, 1]
target = 8

print(search(arr, target))
