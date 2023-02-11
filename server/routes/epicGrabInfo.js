const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


//this route gets all the data from the story table using user/epic id 
router.get('/story', (req, res) => {
    let userId = req.user.id
    let epicId = req.body.epic_id
    console.log(epicId);
    let sqlValues = [userId , epicId]
    let sqlQuery = `
    SELECT * from "stories"
	WHERE "user_id" = $1
		AND "epic_id" = $2;
    `;
    pool.query(sqlQuery , sqlValues)
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
//this adds the story the user writes to the story table
router.post('/' , rejectUnauthenticated, ( req , res)=>{
    
    let dataToSend = req.body
    let userId = req.user.id
    console.log(dataToSend);
    console.log(userId);
    const sqlQuery = `INSERT INTO "stories" 
                        ("epic_id", "user_id", "story_text")
                        VALUES 
                        ($1, $2, $3);`

    const sqlValues = [
                    dataToSend.epic_id,
                    userId, 
                    dataToSend.story_text,
                ]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes)=>{
            res.sendStatus(201)
        })
        .catch((dbErr)=>{
            console.log('error in POST serverside:', dbErr)
            res.sendStatus(500)
        })

})





module.exports = router