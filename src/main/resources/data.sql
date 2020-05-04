DELETE from cities;
DELETE from communities;

INSERT INTO cities (id,name) VALUES (1,'Stockholm');
INSERT INTO communities(id, name, city_id) values (1, 'Taby', 1);
INSERT INTO communities(id, name, city_id) values (2, 'Vallingby', 1);
-- INSERT INTO city (name) VALUES ('stockholm');
