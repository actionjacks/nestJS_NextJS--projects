from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import pandas as pd
from datetime import datetime
import os
import sys

application_path = os.path.dirname(sys.executable)
now = datetime.now()
formatted_date = now.strftime('%d%m%Y')

#  get all p tag form link and save to csv

web = 'https://www.thesun.co.uk/sport/football/'
# introduce path here downland hromium driver
path = '/Users/actio/Downloads/chromedriver'

# headless-mode
options = Options()
options.headless = True

# Creating the driver
driver_service = Service(executable_path=path)
driver = webdriver.Chrome(service=driver_service)
# to add options
# driver = webdriver.Chrome(service=driver_service, options=options)

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

file_name = f'headline-{formatted_date}.csv'
final_path = os.path.join(application_path, file_name)

# df_headlines.to_csv(f'{application_path}\headline-{formatted_date}.csv')
df_headlines.to_csv(final_path)

driver.quit()
