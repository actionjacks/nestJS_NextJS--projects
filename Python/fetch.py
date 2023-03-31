from urllib import request
import requests
import json

res = requests.get("https://pokeapi.co/api/v2/pokemon/1")
data = res.text
parse_json = json.loads(data)
sprie = parse_json['sprites']['front_default']
print(sprie)

# pip install requests
# pip install pandas
