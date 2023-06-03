class Phone:

    # constructor
    def __init__(self, brand: str, price: int) -> None:
        self.brand = brand
        self.price = price

    def __str__(self) -> str:
        return f"overvriten str method {self.brand}"

    def printProperties(self) -> int:
        print(f"brand --: {self.brand}")
        print(f"price ---: {self.price}")
        return self.price


# func (arg: any) -> this is return type
# foo (arg: int) -> int
nokia = Phone("nokina", 99)

foo = nokia.printProperties()
print(foo)


class Account:
    __balance = 10000

# zmienne do odczytu
    @property
    def balance(self):
        return self.__balance

    # setery-gettery
    # wywola sie najpierw to bo to ma priorytet to na gorze zostaje przysloniete z racji tego ze to jest getter
    @balance.getter
    def balance(self):
        return f"to jest z gettera {self.__balance}"

    @balance.setter
    def balance(self, value):
        self.__balance += value


bank = Account()
# uzycie gettera
print(bank.balance)
# uzycie settera
bank.balance = 50

print(bank.balance)


class My_base_calss():
    def __init__(self) -> None:
        print('IM base Class')

    def foo(self):
        print('my_base')


class My_child_class(My_base_calss):
    def __init__(self) -> None:
        My_base_calss.__init__(self)
        print('My_child_class')

    def foo(self):
        print('form My_child_class')
