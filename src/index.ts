import express from 'express'
const port = process.env.PORT || 5000
const app = express()
app.listen(port, () => {
  console.log(`app is running on port ${port}`)
})
