DELETE from items;
DELETE from communities;
DELETE from users;
DELETE from cities;

INSERT INTO cities (id,name) VALUES (1,'Stockholm');
INSERT INTO cities (id,name) VALUES (2,'Gothenberg');
INSERT INTO communities(id, name, city_id) values (1, 'Taby', 1);
INSERT INTO communities(id, name, city_id) values (2, 'Vallingby', 1);
INSERT INTO communities(id, name, city_id) values (3, 'XYZ', 2);
INSERT INTO communities(id, name, city_id) values (4, 'AAA', 2);
INSERT INTO users(id, email, firstname, lastname, password, city_id) values (1, 'test@test.com', 'John', 'Doe', '$2a$10$vkJWJyFBih/WWrCHvmR/GetcCTnOy4lO2zzlXMcyMFDN32eIYTL76', 1);
-- INSERT INTO items(id, title, description, user_id, community_id, offering) values (1, 'Dress', 'Summer dress', 1, 2, True);
-- INSERT INTO assistance(id, title, description, user_id, community_id, offering) values (1, 'Faster', 'data sql', 1, 2, True);
-- INSERT INTO city (name) VALUES ('stockholm');

select from setval('users_id_seq', 1);