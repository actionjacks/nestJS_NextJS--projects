def multiply_matrices(matrix1, matrix2):
    rows1 = len(matrix1)
    cols1 = len(matrix1[0])
    rows2 = len(matrix2)
    cols2 = len(matrix2[0])

    # Sprawdzenie czy ilość kolumn pierwszej macierzy jest równa ilości wierszy drugiej macierzy
    if cols1 != rows2:
        raise ValueError("Niepoprawne wymiary macierzy.")

    # Inicjalizacja wynikowej macierzy
    result = [[0 for _ in range(cols2)] for _ in range(rows1)]

    # Mnożenie macierzy
    for i in range(rows1):
        for j in range(cols2):
            for k in range(cols1):
                result[i][j] += matrix1[i][k] * matrix2[k][j]

    return result


# Przykładowe macierze
matrix1 = [[1, 2, 3], [4, 5, 6]]
matrix2 = [[7, 8], [9, 10], [11, 12]]

# Wywołanie funkcji mnożącej macierze
result_matrix = multiply_matrices(matrix1, matrix2)

# Wyświetlenie wyniku
for row in result_matrix:
    print(row)
