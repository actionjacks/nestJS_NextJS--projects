import numpy as np

my1 = np.arange(4)  # [0,1,2,3]
# conver list to array
from_list = np.array([1, 2, 3])

foo = np.array([1, 2, 3, 4, 5, 6])
# print(foo[2:5])

# sorted = np.sort(my1)

create_array_3d = np.zeros((3, 3))
create_array_3d[:] = 99
print(create_array_3d)


arr_repeat = np.repeat(11, 3)  # [11, 11, 11]
