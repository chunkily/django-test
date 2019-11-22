# Python support can be specified down to the minor or micro version
# (e.g. 3.6 or 3.6.3).
# OS Support also exists for jessie & stretch (slim and full).
# See https://hub.docker.com/r/library/python/ for all supported Python
# tags from Docker Hub.
FROM python:3.8-alpine

# If you prefer miniconda:
#FROM continuumio/miniconda3

LABEL Name=django-test Version=1.0.0
EXPOSE 8000

WORKDIR /app

# Using pip:
ADD ./mysite/requirements.txt /app/mysite/requirements.txt
RUN python3 -m pip install -r mysite/requirements.txt

ADD . /app

# CMD ["python3", "mysite/manage.py", "runserver", "0.0.0.0:8000"]

# Using pipenv:
#RUN python3 -m pip install pipenv
#RUN pipenv install --ignore-pipfile
#CMD ["pipenv", "run", "python3", "-m", "django-test"]

# Using miniconda (make sure to replace 'myenv' w/ your environment name):
#RUN conda env create -f environment.yml
#CMD /bin/bash -c "source activate myenv && python3 -m django-test"
