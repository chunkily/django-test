import os

from mysite.settings.base import *  # noqa: F401, F403
from mysite.settings.base import BASE_DIR

DEBUG = False

ALLOWED_HOSTS = ["*"]

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")

STATIC_ROOT = str(BASE_DIR / "static")
