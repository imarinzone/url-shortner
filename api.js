const { response } = require("express")

pool = require("./connection")

const getURL = (request, response) => {
    const entryUrl = request.params['url']
    pool.query(`SELECT * FROM url_db where short_url='${entryUrl}'`, (error, results) => {
        if (error) {
        throw error
        }
        response.redirect(results.rows[0].long_url)
    })
    }

const getallURL = (request, response) => {
    pool.query('SELECT * FROM url_db', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(results.rows)
    })
    }

const addURL = (request, response) => {
    //console.log(request)
    entryUrl = request.body
    console.log(entryUrl)
    /*short_url = pool.query(`SELECT * FROM url_db where short_url='${entryUrl}'`)
    if (short_url!=null){
        obj ={
            "url":short_url
        }
        response.status(200).json(obj)
    }else{
        short_url = Math.random().toString(36).slice(7)
        pool.query(`INSERT INTO url_db (long_url, short_url) VALUES ('${entryUrl}', '${short_url}')`, (error, results) => {
            if (error) {
            throw error
            }
            obj ={
                "url":short_url
            }
            response.status(200).json(obj)
        })
        response.status(500)
    }
    */
    }

const redirectURL = (request, response)=>{

}

module.exports = {
    getURL,
    getallURL,
    addURL,
    }