import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(5939, () => console.log(5939))