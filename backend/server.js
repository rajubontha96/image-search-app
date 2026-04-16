import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import {createApi} from 'unsplash-js'

dotenv.config()

const app = express()
app.use(cors())

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch,
})

app.get('/search', async (req, res) => {
  const {query, page = 1} = req.query

  try {
    const response = await unsplash.search.getPhotos({
      query,
      page: Number(page),
      perPage: 12,
    })

    res.json(response.response)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch images'})
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})