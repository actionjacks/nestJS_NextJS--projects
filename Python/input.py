def quesss():
    quess = ''

    while quess not in ['0', '1']:
        quess = input('pick 0 or 1 2')
    return int(quess)


quesss()
