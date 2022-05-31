import app from './app'
import config from './config'

const { PORT = 3000 } = process.env

app.listen(Number(PORT), () => {
  console.log(`App running on http://localhost:${config.port} in "${config.env}" mode`)
})

app.on('error', (err) => {
  console.error(err)
  process.exit(1)
})
