DO
$do$
BEGIN
    IF EXISTS (SELECT FROM pg_user
        WHERE  usename = 'lodictio-main-db-user'
        ) THEN
        RAISE NOTICE 'User exists';		
    ELSE
       CREATE USER "lodictio-main-db-user" WITH ENCRYPTED PASSWORD '123456';
	     RAISE NOTICE 'Added User To Server';
    END IF;
END
$do$;
DO
$do$
BEGIN
    IF EXISTS (select * from pg_database
        WHERE  datname = 'lodictio-main-db'
        ) THEN
        RAISE NOTICE 'Database exists';
    ELSE
         CREATE DATABASE "lodictio-main-db";
	     RAISE NOTICE 'Added Database To Server';
		 GRANT ALL PRIVILEGES ON DATABASE  "lodictio-main-db" TO "lodictio-main-db-user";
		 RAISE NOTICE 'GRANT ALL PRIVILEGES OK!';
    END IF;
END
$do$;



