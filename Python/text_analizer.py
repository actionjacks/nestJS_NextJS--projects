with open('text_to_analize.txt') as file:
    text = file.read()


def character_counter(txt, char):
    return txt.count(char)


result = character_counter(text, 'z')
# result = character_counter(text.lower(), 'z')
print(result)

file.close()


def calculate_letter_percentage(text):
    text = text.lower()
    total_characters = len(text)
    letter_count = {}

    for char in text:
        if char.isalpha():
            letter_count[char] = letter_count.get(char, 0) + 1

    letter_percentage = {}

    for letter, count in letter_count.items():
        percentage = (count / total_characters) * 100
        letter_percentage[letter] = round(percentage, 2)

    return letter_percentage


result = calculate_letter_percentage(text)
print(result)
