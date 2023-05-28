import pandas as pd
import sqlite3

column = ["jacek", "placek", "wacek"]
titled_columns = {"name": column,
                  "height": [1.2, 1.3, 0.21],
                  "weight": [12, 32, 4]}
data = pd.DataFrame(titled_columns)
# print(data)


bmi = []
for i in range(len(data)):
    bmi_score = data["weight"][i] / (data["height"][i] ** 2)
    bmi.append(bmi_score)
data["bmi"] = bmi

# data.to_csv("bbb.csv")
connection = sqlite3.connect("some_dummy.db")

data_from_db_using_pandas = pd.read_sql("select * from dummy", connection)

first_5_rows = data_from_db_using_pandas.head()
last_2_rows = data_from_db_using_pandas.tail(2)

filtered_row = data_from_db_using_pandas[data_from_db_using_pandas["secondo_2"] == "loddoffoof"]

remove_column = data_from_db_using_pandas.drop("secondo_2", axis=1)

print(remove_column)
