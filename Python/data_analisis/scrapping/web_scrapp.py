import requests
import bs4


result = requests.get('https://www.gry-online.pl/gry/pc/')
soup = bs4.BeautifulSoup(result.text, 'lxml')

print(soup.select('h1'))  # [<h1>Gry PC Windows</h1>]
print(soup.select('h1')[0].get_text())  # Gry PC Windows

'''
  soup.select('.#some_id')
    soup.select('.class')
      soup.select('div span')
        soup.select('div > span')
'''

image = soup.select('img')[0]['src']
image_link = requests.get(image)
# image_link.content - binary

f = open('my_file.jpg', 'wb')  # write binary file
f.write(image_link.content)
f.close()
