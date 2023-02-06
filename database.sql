
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
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "epics" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (1000) NOT NULL,
    "card_1" Varchar(255) NOT NULL,
    "card_2" VARCHAR(255) NOT NULL,
    "card_3" VARCHAR(255) NOT NULL 
);

INSERT INTO "epics"
("title", "card_1","card_2","card_3")
VALUES
('Six Samurai', 
'https://m.media-amazon.com/images/I/51Ht3AgwYpL._AC_.jpg',
'https://ms.yugipedia.com//3/3e/FaceOff-DUEA-EN-R-1E.png',
 'https://i.etsystatic.com/31098182/r/il/28d6cd/4273215703/il_570xN.4273215703_f6g4.jpg'),
 
('GaGaGiGo', 
'https://ms.yugipedia.com//9/98/Gagagigo-DR1-EN-C-UE.png',
'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/43793530.jpg',
 'https://m.media-amazon.com/images/I/81HHAx5-eNL._AC_SY879_.jpg'),
 
('Warrior Dai Grepher', 
'https://ms.yugipedia.com//9/9f/WarriorDaiGrepher-SBAD-EN-C-1E.png', 
'https://ms.yugipedia.com//a/ae/DarkGrepher-DASA-EN-SR-1E.png',
'https://static.wikia.nocookie.net/yugioh/images/a/a6/LightrayGrepher-GAOV-EN-R-UE.png/revision/latest?cb=20170304151431');

CREATE TABLE "stories" (
    "id" SERIAL PRIMARY KEY,
    "epic_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "image_url" VARCHAR (1000),
    "story_text" VARCHAR (1000),
    FOREIGN KEY ("epic_id") REFERENCES "epics" ("id"),
    FOREIGN KEY ("user_id") REFERENCES "user" ("id")
);

