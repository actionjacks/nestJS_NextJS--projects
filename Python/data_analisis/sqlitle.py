import sqlite3
connection = sqlite3.connect("some_dummy.db")
cursor = connection.cursor()

'''
cursor.execute(
    "CREATE TABLE dummy (some_number integer, first_1 text, secondo_2 text)")
'''

dummy_data = [
    (1987, "lerem lorem 2", "loddoffoof"),
    (147, "lerem lorfffem 2", "loddoffo333of"),
    (123487, "lerem lossssrem 2", "lodd4234offoof"),
    (15337, "lerem lorffffem 2", "lod33doffoof"),
    (1987342342, "lerem 4343lorem 2", "loddsdfoffoof"),
]

'''
cursor.executemany("INSERT OR IGNORE INTO dummy VALUES (?,?,?)", dummy_data)
'''

for data in dummy_data:
    # check if record exists
    cursor.execute(
        "SELECT * FROM dummy WHERE some_number=? AND first_1=? AND secondo_2=?", data)
    result = cursor.fetchone()

    if result is None:
        # if no record add
        cursor.execute("INSERT INTO dummy VALUES (?,?,?)", data)

connection.commit()

for row in cursor.execute("SELECT * from dummy"):
    print(row)

# cursor.execute("select * from dummy where first_1=:c", {"c": "lorem"})
# lorem_result = cursor.fetchall()
# print(lorem_result, "<-")

connection.close()
