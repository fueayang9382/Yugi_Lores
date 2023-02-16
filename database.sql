
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );
----------original ^^^^^^^^^^^
--this is to create an account
 
--user create an account, they will need this to have an account
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--INSERT DUMMY DATA FOR "users"
INSERT INTO "user"
("username", "password")
VALUES
('Tou', 'password');

--this is BaseMode CRUD 
---- users has three epic to choose from. 
--CREATE TABLE "epic" (
--    "id" SERIAL PRIMARY KEY,
--    "title" VARCHAR (1000) NOT NULL,
--    "card_1" Varchar(255) NOT NULL
--);

--this for solo+ only
---- users has three epic to choose from. 
CREATE TABLE "epic" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (1000) NOT NULL,
    "card_1" Varchar(255) NOT NULL,
    "card_2" Varchar(255) NOT NULL,
    "card_3" Varchar(255) NOT NULL
);




--THIS IS BASE MODE ONE TITLE ONE CARD
-- INSERTING epics DATA INTO EPICS
--INSERT INTO "epic"
--("title", "card_1")
--VALUES
--('Six Samurai', 
--'https://m.media-amazon.com/images/I/51Ht3AgwYpL._AC_.jpg'
--);

--solo+ ONLY!!!
INSERT INTO "epic"
("title", "card_1", "card_2", "card_3")
VALUES
('Six Samurai', 
'https://m.media-amazon.com/images/I/51Ht3AgwYpL._AC_.jpg',
'https://ms.yugipedia.com//3/3e/FaceOff-DUEA-EN-R-1E.png',
'https://i.etsystatic.com/31098182/r/il/28d6cd/4273215703/il_570xN.4273215703_f6g4.jpg'
);


-- shong's request 
INSERT INTO "epic"
("title", "card_1", "card_2", "card_3")
VALUES
('Six Samurai', 
'https://m.media-amazon.com/images/I/51Ht3AgwYpL._AC_.jpg',
'https://ms.yugipedia.com//3/3e/FaceOff-DUEA-EN-R-1E.png',
'https://pm1.narvii.com/6070/4be129cf52e25d2c47cdf76b0cb379b36c721466_hq.jpg'
),
('Warrior Dai Grepher', 
'https://pm1.narvii.com/6537/ddf1276eb49e73961ffceffdd0317b6bd3f58eff_hq.jpg',
'https://pm1.narvii.com/6537/78833bd20d1d142bcc16003fa3a09b9971f20210_hq.jpg',
'https://pm1.narvii.com/6537/892eb2f10c8386d490e756bbbf01e0f756ee794c_hq.jpg'),

('GaGaGiGo', 
'https://ms.yugipedia.com//9/98/Gagagigo-DR1-EN-C-UE.png',
'https://ms.yugipedia.com//1/1c/GigaGagagigo-DR2-EN-C-UE.png',
'https://ms.yugipedia.com//c/c3/GogigaGagagigo-5DS2-EN-C-1E.png'
);

DROP TABLE  CASCADE 'epic';

DROP TABLE IF EXISTS epic CASCADE;



INSERT INTO "stories" ( "epic_id" , "user_id" , "story_text")
	VALUES (2 , 2 ,'yo this is the story of how my life got flipped, turned, upside down');


--INSERT INTO "epic"
--("title", "card_1","card_2","card_3")
--VALUES
--('Six Samurai', 
--'https://m.media-amazon.com/images/I/51Ht3AgwYpL._AC_.jpg',
--'https://ms.yugipedia.com//3/3e/FaceOff-DUEA-EN-R-1E.png',
-- 'https://i.etsystatic.com/31098182/r/il/28d6cd/4273215703/il_570xN.4273215703_f6g4.jpg');
 
--('GaGaGiGo', 
--'https://ms.yugipedia.com//9/98/Gagagigo-DR1-EN-C-UE.png'
--,
--'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/43793530.jpg',
-- 'https://m.media-amazon.com/images/I/81HHAx5-eNL._AC_SY879_.jpg'),
-- 
--('Warrior Dai Grepher', 
--'https://ms.yugipedia.com//9/9f/WarriorDaiGrepher-SBAD-EN-C-1E.png', 
--'https://ms.yugipedia.com//a/ae/DarkGrepher-DASA-EN-SR-1E.png',
--'https://static.wikia.nocookie.net/yugioh/images/a/a6/LightrayGrepher-GAOV-EN-R-UE.png/revision/latest?cb=20170304151431');


DROP TABLE "test" CASCADE;

CREATE TABLE "test" ("test" VARCHAR(500));
INSERT INTO "test" ( "test")
	VALUES ('this');


-- when users has their epic picked out, this is what is going to append on screen. 


CREATE TABLE "stories" (
    "id" SERIAL PRIMARY KEY,
    "epic_id" INTEGER NOT NULL ,
    "user_id" INTEGER NOT NULL ,
    "story_text" VARCHAR (1000),
    FOREIGN KEY ("epic_id") REFERENCES "epic" ("id"),
    FOREIGN KEY ("user_id") REFERENCES "user" ("id")
);

DROP TABLE "stories" CASCADE;
--DO I need to make another stories table for solo+

SELECT * from "stories"
	WHERE "user_id" = 3
		AND "epic_id" = 1;
		

 SELECT * from "epic"
	WHERE "id" = 1;
	

--need to grab id of the story to render the user story 
SELECT * FROM "stories"
WHERE "epic_id" = 1
AND "user_id" =1;