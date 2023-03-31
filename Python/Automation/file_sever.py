import os.path
import pandas as pd


def saver(file_name: str, data_to_save):
    file_exists = os.path.exists(f'./{file_name}.csv')

    if not file_exists:
        file = open(f'./{file_name}.csv', "x")  # x create file
        file.close()

    file = open(f'./{file_name}.csv', "r+")  # read and write

    file.write(str(pd.DataFrame(data_to_save)))

    #  print(pd.DataFrame(data_to_save))

    file.close()


if __name__ == '__main__':
    pass
