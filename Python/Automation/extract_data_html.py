from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import pandas as pd

#  get all p tag form link and save to csv

web = 'https://www.thesun.co.uk/sport/football/'
# introduce path here downland hromium driver
path = '/Users/actio/Downloads/chromedriver'

# Creating the driver
driver_service = Service(executable_path=path)
driver = webdriver.Chrome(service=driver_service)
driver.get(web)

# Finding Elements
containers = driver.find_elements(
    by='xpath', value='//div[@class="teaser__copy-container"]')

titles = []
subtitles = []
links = []
for container in containers:
    print(container)
    # title = container.find_element(by='xpath', value='./a/h2').text
    subtitle = container.find_element(by='xpath', value='./a/p').text
    # link = container.find_element(
    #     by='xpath', value='./a').get_attribute('href')
    # titles.append(title)
    subtitles.append(subtitle)
    # links.append(link)

# Exporting data to a CSV file
my_dict = {'subtitle': subtitles}
df_headlines = pd.DataFrame(my_dict)
df_headlines.to_csv('headline.csv')

driver.quit()
