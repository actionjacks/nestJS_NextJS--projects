import json


def check_unique_keys(json_file):
    with open(json_file) as file:
        data = json.load(file)

    keys = set()
    duplicate_keys = []

    if isinstance(data, dict):
        # for key in data.keys():
        # print(key)
        for value in data.values():
            if value in keys:
                duplicate_keys.append(value)
            else:
                keys.add(value)
    print(duplicate_keys)


# Przykładowe użycie:
json_file_path = "to_test.json"
check_unique_keys(json_file_path)
