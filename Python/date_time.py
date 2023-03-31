import datetime

print(datetime.datetime.now())

new_formatedDate = datetime.datetime.now()

print(new_formatedDate.strftime("%d-%m-%Y"))  # date
print(new_formatedDate.strftime("%H-%M-%S"))  # hours
