import keyword  # define all keyword reserved for python
print(keyword.kwlist)

name = 'jacekkk'

print(len(name))

print("ja" in name)  # check in string
print("ja" not in name)

# when type f can use variables
multi_line_comment = f"""
lorem ___ {name}
lotem >
        > 
          >
"""

print(multi_line_comment)


# function
def foo():
    name = 'dupa'
    yer = 1
    print(name, yer)


foo()

# logic operators | and or
a = 2
b = 2
if (a == b and b == a):
    print(a, b, '<--')

print(not (a == b))  # false

if 1 == 1:
    print(1)
elif 1 > 0:
    print(0)
else:
    print('else')

# list
numb = [1, ['dupa'], 3, 4, 5, 1, 43, 5, 77, 54]

print(numb[0])  # 1

print(numb[1][0])  # dupa

numbers_List = [12, 4, 43, 4342, 1, 9]
numbers_List.sort()
#  numbers_List.clear() # array = []
print(numbers_List)

new_numbers = [1, 23, 23, 4, 6, 7, 8, 1, 1, 1, "new_numbers"]

while 1 in new_numbers:
    new_numbers.remove(1)

print(new_numbers)

new_numbers2 = [1, 23, 23, 4, 6, 7, 8, 1, 1, 1, "new_numbers2"]
filtered_numbers = [num for num in new_numbers2 if num != 1]
print(filtered_numbers)

# set no duplicates
my_new_set = {1, 1}
print(my_new_set)

letters1 = {"a", "b", "c"}
letters2 = {"c", "d", "e"}
union = letters1 | letters2
intersec = letters1 & letters2

print(f"{union} union")  # {'a', 'c', 'e', 'd', 'b'} union
print(f"{intersec} intersec")  # {'c'} intersec

# dicionaries
person_ = {
    "name": "Jacek",
    "age": 30
}
print(person_["name"])
print(person_.keys())

for key in person_:
    print(key)

for key, val in person_.items():
    print(key, val)

sum_of_num = [1, 3, 4, 5, 6, 7, 8, 12, 21, 32, 1]

sum = sum(sum_of_num)
print(sum)
