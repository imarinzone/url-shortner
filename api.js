const { response } = require("express")

pool = require("./connection")
// API to redirect the page
const getURL = (request, response) => {
    const entryUrl = request.params['url']
    pool.query(`SELECT * FROM url_db where short_url='${entryUrl}'`, (error, results) => {
        if (error) {
            throw error
        }
        if (results.rows.length){
            response.status(302).redirect(results.rows[0].long_url)
        }
        else{
            response.status(404).send("NOT A VALID SHRINK URL!")
        }
    })
    }
// API to get all the URLs in the DB
const getallURL = (request, response) => {
    pool.query('SELECT * FROM url_db', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(results.rows)
    })
    }
// API to add a new URL in the DB
const addURL = (request, response) => {
    entryUrl = request.body.url
    pool.query(`SELECT * FROM url_db where long_url='${entryUrl}'`, (error, results) => {
        if (error) {
            throw error
        }
        if (results.rows.length==0){
            short_url = Math.random().toString(36).slice(7)
            pool.query(`INSERT INTO url_db (long_url, short_url) VALUES ('${entryUrl}', '${short_url}')`, (error, results) => {
                if (error) {
                throw error
                }
                obj ={
                    "url":short_url
                }
            response.status(200).json(obj)
        })}
        else{
            short_url = results.rows[0].short_url
            obj ={
                "url":short_url
            }
            response.status(200).json(obj)
        }
    })
}

module.exports = {
    getURL,
    getallURL,
    addURL,
    }