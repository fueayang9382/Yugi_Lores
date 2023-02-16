const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//this route gets all the data from the story table using user/epic id
router.get('/story/:id', rejectUnauthenticated, (req, res) => {//'/story' original
    let userId = req.user.id;
    let epicId = req.params.id;
    
    let sqlValues = [epicId , userId];
    let sqlQuery = `
    SELECT * FROM "stories"
    WHERE "epic_id" = $1
    AND "user_id" =$2;
    `;/////// this should work for grabTextNId
    console.log('333333 what is userId:', userId);
    console.log('333333 what is epicId:', epicId);
    // // SELECT * from "stories"
	//  SELECT * from "stories" old sql command
	// WHERE "user_id" = $1
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

//this route renders image using the id
router.get('/detail/:id', (req, res) => {
    let sqlQuery = `
    SELECT * from "epic"
        WHERE "id" = $1;
    `;
    let sqlValues = [req.params.id]
    console.log(sqlValues);
    pool.query(sqlQuery , sqlValues)
        .then((dbRes) => {
            res.send(dbRes.rows[0]);
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
            res.send(dbRes.rows[0]); 
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
                        ($1, $2, $3);`;

    const sqlValues = [
        dataToSend.epic_id,
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
    console.log('THIS IS THE ID WE"RE CHANGING', req.params.id);//*** */
    console.log('THIS IS THE body', req.body);//** */

    const idToUpdate = req.params.id;//** */
    const sqlText = `
        UPDATE stories
        SET story_text=$1
        WHERE id=$2
    `;
    pool.query(sqlText, [req.body.story_text, idToUpdate])//*** */
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in put route ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
