//import { query } from '@/model/mysql'
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/', async (req, res) => {
  console.log('Searching')
  const result = 'foo'
  console.log('Done searching')
  return res.send(result)
})

export default app
