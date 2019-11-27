from mysite.settings.base import *  # noqa

DEBUG = True

SECRET_KEY = "-n)_-8%3!%y6*3xl@q^c9q16x1-^7!y8%4rzsgq6)71-j!+v$-"

# Disable all password rules to allow simple weak passwords.
AUTH_PASSWORD_VALIDATORS = []
