import express from 'express'
const port = process.env.PORT || 5000
const app = express()






app.get('/', (req, res) => {
  res.status(200).json({ api: 'UP' })
})
app.listen(port, () => {
  console.log(`app is running on port ${port}`)
})
