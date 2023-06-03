def som_funct(fun, num):
    return fun(num)


som_funct(lambda x: x * x, 3)
# anonim function x - is argument , this is return

result = (lambda x: x*x)(5)  # afunction arguments after after ()
print(result)

result2 = (lambda x: x*x)
print(result2(4))
