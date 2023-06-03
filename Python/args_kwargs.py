def more_arguments_to_func(*args):
    '''
    *args
    any number of arguments (tuple) (1,3,4,5,5)
    '''
    return sum(args) * 0.05


sum_ = more_arguments_to_func(12, 23, 4, 24, 5, 1, 21)
print(sum_)


def my_kwark(**kwargs):
    '''
    *kwargs
    any number of arguments (dicionary) (foo='foo', foo2='foo')
    '''
    if 'dupa' in kwargs:  # loop in keys in dicionary
        print('fund {}'.format(kwargs['dupa']))
    else:
        print('not found')


res = my_kwark(dupa='dupa', foo='doo')
