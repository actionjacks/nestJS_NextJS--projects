import pandas as pd
import file_sever as FS

simson_tables = pd.read_html(
    'https://en.wikipedia.org/wiki/List_of_The_Simpsons_episodes_(seasons_1%E2%80%9320)')

#  print(simson_tables[1])
FS.saver('simpson', simson_tables[1])

#  print(simson_tables[1].head())

simson_tables[1].to_csv('table_.csv')
# save file to csv

file_url_table = pd.read_csv(
    'https://www.football-data.co.uk/mmz4281/2122/E0.csv')

# print(file_url_table)

renamed_table = file_url_table.rename(columns={'Date': 'date',
                                               'HomeTeam': 'home_team',
                                               'AwayTeam': 'away_team',
                                               'FTHG': 'home_goals',
                                               'FTAG': 'away_goals'})

#  print(renamed_table)

if __name__ == '__main__':
    pass
