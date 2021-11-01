def array_plus_array(arr1, arr2):
    arrays = arr1 + arr2
    Sum = sum(arrays)
    return Sum


array_plus_array([1, 23], [1, 3, 4, 5])


# --------best practice------
def array_plus_array(arr1, arr2):
    return sum(arr1+arr2)
