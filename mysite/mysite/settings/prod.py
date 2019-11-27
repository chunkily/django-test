import os
from mysite.settings.base import *  # noqa

DEBUG = False

ALLOWED_HOSTS = ["*"]

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
