const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static('img'))

app.get('/',(req,res)=>{
    res.render('index')
})
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })
app.get('/about', (req, res) => {
    let abo = ['ball', 'cup', 'pen']
    res.render('about', abo )  
});

app.get('/user/:username',(req,res)=>{
    let data =  {username: req.params.username, hobbies:['karate','voleybol','it']}
    res.render(`user`,data)
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})
