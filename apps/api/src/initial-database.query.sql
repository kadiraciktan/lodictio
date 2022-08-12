CREATE USER "lodictio-main-db-user" WITH ENCRYPTED PASSWORD '123456';
CREATE DATABASE "lodictio-main-db";
GRANT ALL PRIVILEGES ON DATABASE  "lodictio-main-db" TO "lodictio-main-db-user";
