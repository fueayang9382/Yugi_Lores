const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//this route gets all the data from the story table using user/epic id
router.get('/story', (req, res) => {
    let userId = req.user.id;
    let epicId = req.body.epic_id;
    console.log(epicId);
    let sqlValues = [userId];
    let sqlQuery = `
    SELECT * from "stories"
	WHERE "user_id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.log('get route broke', dbErr);
            res.sendStatus(500);
        });
});
//this route only grabs the data from the epic table
router.get('/', (req, res) => {
    let sqlQuery = `
    SELECT * from "epic";
    `;
    pool.query(sqlQuery)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.log('get route broke', dbErr);
            res.sendStatus(500);
        });
});

// get route fetch all the data from table using table ID*Randy
//this a get route for one epic: to edit just that one card.
router.get('/editStory/:id', (req, res) => {
    let storyId = req.params.id;
    let sqlValues = [storyId];
    let sqlQuery = `
    SELECT * from "stories"
	WHERE "id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows[0]); //[0] was added from video lecture@20:25
        })
        .catch((dbErr) => {
            console.log('get route broke', dbErr);
            res.sendStatus(500);
        });
});

//this adds the story the user writes to the story table
router.post('/', rejectUnauthenticated, (req, res) => {
    let dataToSend = req.body;
    let userId = req.user.id;
    console.log(dataToSend);
    console.log(userId);
    const sqlQuery = `INSERT INTO "stories" 
                        ("epic_id", "user_id", "story_text")
                        VALUES 
                        (1, $1, $2);`;

    const sqlValues = [
        // dataToSend.epic_id,
        userId,
        dataToSend.story_text,
    ];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.log('error in POST serverside:', dbErr);
            res.sendStatus(500);
        });
});

///TOU delete route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const sqlValues = [req.params.id];
    console.log('this is sqlValues', sqlValues);
    const sqlQuery = `DELETE FROM "stories" WHERE "id" = $1`;
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('error in DELETE serverside:', dbErr);
            res.sendStatus(500);
        });
});
///TOU delete route

//Tou put route
router.put('/editStory/:id', (req, res) => {
    // Update this single student
    console.log('THIS IS THE ID WE"RE CHANGING', req.params.id)
    console.log('THIS IS THE body', req.body)

    const idToUpdate = req.params.id;
    const sqlText = `
      UPDATE stories
        SET story_text=$1
        WHERE id=$2
    `;
    pool.query(sqlText, [req.body.story_text, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in put route ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
