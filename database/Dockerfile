FROM postgres:15

ENV POSTGRES_DB=mydb
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=secret

COPY init.sql /docker-entrypoint-initdb.d/
FROM postgres:15-alpine

COPY init.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432
