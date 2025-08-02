require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Congratulations! You are Selected for the Next Round!!')
})
    


//another route 
app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})