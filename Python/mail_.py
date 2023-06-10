import keyboard
import smtplib
import getpass
# send mail using Gmail
smtp_object = smtplib.SMTP('smtp.gmail.com', 587)
smtp_object.ehlo()
smtp_object.starttls()


def close_connection():
    smtp_object.quit()


keyboard.add_hotkey('esc', close_connection)
keyboard.wait('esc')

password = getpass.getpass('Password')
email = getpass.getpass('Email')

smtp_object.login(email, password)

from_adress = email
to_address = input('email to ...')
subject = input('Enter subject')
message = input('Email message')

msg = 'Subject: ' + subject + '\n' + message

smtp_object.sendmail(from_adress, to_address, msg)

smtp_object.quit()
