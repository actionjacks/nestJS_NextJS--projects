import pandas as pd
import matplotlib.pyplot as plt

y = {'f(x)': [2, 20, 5, 25], 'g(x)': [4, 10, 15, 5]}
x = [5, 4, 3, 4]

graph = pd.DataFrame(y, x)
graph.plot(kind='line', grid=True, title='Yo', ylabel="1---", xlabel='2---')

print(graph)
plt.show()
