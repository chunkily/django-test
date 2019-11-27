FROM python:3.8-alpine

LABEL Name=django-test Version=1.0.0
EXPOSE 8000

WORKDIR /app/

ADD ./requirements.txt ./requirements.txt

# These packages are required to install psycopg2 on alpine
# Since there is no psycopg2-binary available for it we need to build from source.
RUN apk update && \
    apk add postgresql-libs && \
    apk add --virtual .build-deps gcc musl-dev postgresql-dev && \
    python3 -m pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps

ADD ./ ./
