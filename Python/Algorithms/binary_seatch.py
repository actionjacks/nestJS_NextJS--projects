arr = [2, 4, 6, 7, 8, 23, 54, 1, 28]
arr.sort()  # Aby funkcja binary_search2 działała poprawnie, najpierw musisz posortować listę
target = 28  # bład dla ostatniego elementu
print(arr)


def binary_search(arr, start, end, target):
    if end >= start:
        mid = (start + end) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            return binary_search(arr, mid + 1, end, target)
        else:
            return binary_search(arr, start, mid - 1, target)

    return -1


print(binary_search(arr, 0, len(arr) - 1, target))


def binary_search2(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


print(binary_search2(arr, target))
print(arr)
