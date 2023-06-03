if __name__ == '__main__':
    try:
        result = 10 + '10'
    except:  # except TypeError (...)
        print('to sie pojawi jesli byl blad')
    else:
        print('to sie pojawi jesli wszystko poszlo dobrze')
    finally:
        print('to sie zawssze wykona')


# check code using
# pip install pylint
# pylint <file_name>.py

# unit test

def cap_text(text):
    return text.capitalize()
