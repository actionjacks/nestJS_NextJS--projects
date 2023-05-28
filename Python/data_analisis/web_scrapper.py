import pandas as pd
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

scraper = pd.read_html(
    "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine#Casualties")

'''
for index, table in enumerate(scraper):
    print('-------------------------------')
    print(index)
    print(table)
'''
# print(scraper[6])
