import express from 'express'
import { json } from 'body-parser'

const app = express()

app.use(json())

//TODO: add versioning to the api and on res.send
app.get('/', (req,res) => {
  res.send('pawsh indo has been started')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})