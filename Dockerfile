FROM python:3.8-alpine

LABEL Name=django-test Version=1.0.0
EXPOSE 8000

WORKDIR /app/

ADD ./mysite/requirements.txt /app/mysite/requirements.txt
RUN python3 -m pip install -r mysite/requirements.txt

ADD ./mysite/ /app/
