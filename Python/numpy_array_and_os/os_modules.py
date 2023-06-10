import os
from collections import Counter, defaultdict
import shutil
import random
# debuger
import pdb

li = [1, 7, 9, 9, 9, 7, 1, 8]

# print(Counter(li))  # Counter({9: 3, 1: 2, 7: 2, 8: 1})

my_dic = defaultdict(lambda: 'default_key')
my_dic['fo'] = 'fo'
# print(my_dic['key_not_ex'])

print(os.getcwd())
# print(os.listdir()) #files in this cWd

# shutil.move('file.txt','c:\\tofolder') move file to this path

# random from list 4 times
fo = random.choices(li, k=5)

# use debuger
# pdb.set_trace()

for folder, sub_folder, files in os.walk(os.getcwd() + '\\some_folder'):
    for f in files:
        full_path = folder+'\\'+f
