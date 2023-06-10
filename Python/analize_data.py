import pandas as pd
import time

start = time.time()
data = pd.read_csv("table_.csv")
# data = pd.read_csv("table_.csv", encoding='utf-8')
# print('file loaded', time.time() - start, 'seconds')
# print('data', data)
# print(data.columns)

start = time.time()
data = pd.read_csv("table_.csv", usecols=["Title", "Written by"])
# print('file loaded', time.time() - start, 'seconds')
# print('data', data)

# data to chunks
start = time.time()
data = pd.read_csv("table_.csv", usecols=["Title", "Written by"], chunksize=1)

for index, chunk in enumerate(data):
    # chunk is readOnly need convert
    foo = pd.DataFrame(chunk)
    # print(foo["Title"])
    # print(chunk)

data_lines = pd.read_csv("table_.csv")
print(data_lines.head(1))
