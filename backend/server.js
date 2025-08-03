import express from 'express'

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send("Server is Ready!")
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    //list of jokes
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!"
    }
    ,
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 3,
      joke: "What do you call fake spaghetti? An impasta!"
    },
    {
      id: 4,
      joke: "Why don't skeletons fight each other? They don't have the guts!"
    },
    {
      id: 5,
      joke: "What do you call cheese that isn't yours? Nacho cheese!"
    }
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Serving at localhost${port}`)
})
