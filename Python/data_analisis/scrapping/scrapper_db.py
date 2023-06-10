import mechanicalsoup
import pandas as pd

url = 'https://pl.wikipedia.org/wiki/Arch_Linux'

browser = mechanicalsoup.StatefulBrowser()
browser.open(url)

# table header
th = browser.page.find_all("th")
distribution = [value.text.replace("\n", "") for value in th]

# data
td = browser.page.find_all("td")
columns = [value.text.replace("\n", "") for value in td]

dictionary = {"Data": distribution}

for index, key in enumerate(th):
    dictionary[key] = columns[index]
# print(dictionary)

df = pd.DataFrame(data=dictionary)
print(df)
