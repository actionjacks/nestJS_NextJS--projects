def suma_przedzialu(start, end):
    if start > end:
        return 0
    else:
        return start + suma_przedzialu(start + 1, end)


poczatek = 1
koniec = 5
wynik = suma_przedzialu(poczatek, koniec)
print(f"Suma liczb od {poczatek} do {koniec} wynosi: {wynik}")


def potega(x, n):
    if n == 0:
        return 1
    else:
        return x * potega(x, n-1)


podstawa = 2
wykladnik = 5
wynik = potega(podstawa, wykladnik)
print(f"Wynik potęgowania {podstawa} do potęgi {wykladnik} wynosi: {wynik}")
