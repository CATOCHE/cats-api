require('dotenv').config()
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')

const {getDoc} =require('./dal')

//const port = process.env.PORT || 5000
//console.log( 'Process.env.PORT',process.env.PORT )


//const search = require('./lib/to-do-search')
//const reqFieldChecker = require('./lib/check-req-fields')
//const objClean = require('./lib/clean-object')
///const {getDelete, getDoc, createDoc} =require('./dal')



const {
  append,
  propOr,
  add,
  sort,
  map,
  compose,
  contains,
  head,
  last,
  split,
  prop,
  pathOr,
  filter,
  merge,
  not,
  isEmpty,
  join,
  find,
  path,
  reject
} = require('ramda')

const port = propOr(9999, 'PORT', process.env)


app.use(bodyParser.json())
app.get('/', (req, res) => res.send('<h1>Welcome to the Cats API</h1>'))



app.get('/cats/:id', (req, res, next) => {
  getDoc(req.params.id, function(err,data){
    if (err){
      next(new HTTPError(err.status, err.message, err))
      return
    }
    res.send(data)
    return
  })
})




app.listen(port, () => console.log('CATS API IS UP on port', port))
