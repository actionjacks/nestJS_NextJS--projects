fo = {x: x**2 for x in range(10)}
print(fo)

fo2 = {k: v**2 for k, v in zip(['a', 'b'], range(2))}
print(fo2)


lista1 = [1, 2, 3]
lista2 = ['a', 'b', 'c']
zipped = zip(lista1, lista2)
print(list(zipped))  # [(1, 'a'), (2, 'b'), (3, 'c')]
