import os.path

file_exists = os.path.exists("./data.csv")

if not file_exists:
    file = open("./data.csv", "x")  # x create file
    file.close()

file = open("./data.csv", "r+")  # read and write
# file = open("./data.csv", "a")  # append not overwrite
file.write("id, name, email\n")
file.write("1, Kakao, email@email.com\n")  # \n new line
file.close()

file = open("./data.csv", "r")  # read only mode
# print(file.read())
# or
for line in file:
    print(line)

file.close()


# better wat
with open("./data.csv", "r") as file:
    print(file.read())  # no need close()
