def my_decorator(func):
    def wrapper():
        print('my_decorator->')
        func()
    return wrapper


def using_decorator():
    print('using_decorator->')


fo = my_decorator(using_decorator)
# fo()

# - USING DECORATOR BETTER WAY


def my_decorator2(func):
    def wrapper():
        print('my_decorator->')
        func()
    return wrapper


@my_decorator2
def using_decorator2():
    print('using_decorator->')


using_decorator2()
