def heapsort(arr):
    n = len(arr)

    # Budowanie maksymalnej kopca
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Wykonanie sortowania poprzez usuwanie elementów z kopca
    for i in range(n - 1, 0, -1):
        # Zamiana korzenia kopca z ostatnim elementem
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)  # Odtworzenie kopca dla pozostałych elementów

    return arr


def heapify(arr, n, i):
    largest = i  # Ustawienie korzenia jako największego elementu
    left = 2 * i + 1
    right = 2 * i + 2

    # Sprawdzenie, czy lewe dziecko jest większe od korzenia
    if left < n and arr[left] > arr[largest]:
        largest = left

    # Sprawdzenie, czy prawe dziecko jest większe od korzenia
    if right < n and arr[right] > arr[largest]:
        largest = right

    # Jeśli największy element nie jest korzeniem, zamień je i odtwórz kopiec
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)


arr = [6, 5, 3, 1, 8, 7, 2, 4, 34, 2, 2, 1, 435, 7, 4, 3, 2, 34, 134, 32]
sorted_arr = heapsort(arr)
print(sorted_arr)


def quicksort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    lesser = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    greater = [x for x in arr if x > pivot]

    return quicksort(lesser) + equal + quicksort(greater)


arr2 = [6, 5, 3, 1, 8, 7, 2, 4, 34, 2, 2, 1, 435, 7, 4, 3, 2, 34, 134, 32]
sorted_arr2 = quicksort(arr2)
print(sorted_arr2)
