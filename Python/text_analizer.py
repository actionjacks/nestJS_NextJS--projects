with open('text_to_analize.txt') as file:
    text = file.read()


def character_counter(txt, char):
    return txt.count(char)


result = character_counter(text, 'z')
print(result)

file.close()
