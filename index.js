import express from 'express'

const app = express()

const PORT = 5000

// localhost:5000

app.get('/', home)
app.post('/info', info)
app.get('/form', form)
app.get('/footer', footer)

function home(req, res) {
  res.send('Hello !!!!!!!!!!!!!!!')
}

function info(req, res) {
  res.send('Info here with POST')
}

function form(req, res) {
  res.send('Form here')
}

function footer(req, res) {
  res.send('Footer here')
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
