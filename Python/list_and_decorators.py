
my_list = [1, 2, 3, 4, 5]
# literacja po elementach
result = [element for element in my_list]
result2 = list(map(lambda element: element, my_list))
result3 = list(element for element in my_list)

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
