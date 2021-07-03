FROM tiangolo/uvicorn-gunicorn:python3.8-slim

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/

COPY  . /app

COPY ./requirements.txt .

# upgrade pip and install required python packages
RUN pip install -U pip
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install argon2_cffi
RUN pip install psycopg2-binary