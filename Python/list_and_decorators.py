
my_list = [1, 2, 3, 4, 5]
# literacja po elementach
result = [element for element in my_list]
result2 = list(map(lambda element: element, my_list))
result3 = list(element for element in my_list)

result4 = [i + 2 for i in my_list if i % 2 == 0]
'''
    result4 to nazwa nowej listy, do której będą dodawane elementy.
    [i + 2 for i in my_list if i % 2 == 0] to składnia list comprehension.
    i + 2 oznacza, że każdy element i z listy my_list zostanie zwiększony o 2.
    for i in my_list oznacza, że iterujemy po elementach listy my_list i przypisujemy każdy element do zmiennej i.
    if i % 2 == 0 to warunek, który sprawdza, czy element i jest parzysty.
    Ostatecznie, nowa lista result4 będzie zawierać tylko te elementy, które spełniają warunek (czyli są parzyste), po zwiększeniu ich o 2.
'''

my_list = [1, 2, 3, 4, 5]


def multiply_by_two(x):
    return x * 2


result4 = list(map(multiply_by_two, my_list))

# - decorators -------------


def my_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return list(map(lambda x: x * 2, result))
    return wrapper


@my_decorator
def multiple_two(x):
    return x


result4 = multiple_two(my_list)
# ----------------------------------


def my_decorator2(multiplayer):
    def multi(func):
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            return list(map(lambda x: x * multiplayer, result))
        return wrapper
    return multi


@my_decorator2(20)
def multiple_using_multiplayer(x):
    return x


result4 = multiple_using_multiplayer(my_list)
print(result4)
