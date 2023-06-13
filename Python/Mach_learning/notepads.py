import pandas as pd
import matplotlib.pyplot as plt

mounths = ['jam', 'feb', 'april', 'goo']
temperature = [-3, 4, 10, 19]

df = pd.DataFrame({'mounths': mounths, 'temp': temperature})
df.plot.bar(x='mounths', y='temp')

plt.show()
