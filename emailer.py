import yagmail
user = "suryanshgarg.1130@gmail.com"
appcode = "1234"

to = "vaishnodevixkashmirtrip@gmail.com"
subject = "my email subject"
content = ["email body"]
with yagmail.SMTP(user, appcode) as yag:
    yag.send(to, subject, content)
