const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static('img'))

app.get('/',(req,res)=>{
    const bookInfo = {books:[
            {
              id: 1,
              title: "Мастер и Маргарита",
              author: "Михаил Булгаков",
              price: 500,
              genre: "Роман",
              description: "Один из самых известных романов русской литературы, сочинённый Михаилом Булгаковым.",
              features: ["Фантастика", "Советская литература", "Долгое ожидание публикации"]
            },
            {
              id: 2,
              title: "1984",
              author: "Джордж Оруэлл",
              price: 400,
              genre: "Дистопия",
              description: "Роман-антиутопия, который предсказывает общество тотального контроля и массовой манипуляции.",
              features: ["Политическая сатира", "Тоталитаризм", "Ожидаемая книга"]
            },
            {
              id: 3,
              title: "Война и мир",
              author: "Лев Толстой",
              price: 800,
              genre: "Исторический роман",
              description: "Эпическое произведение о жизни в России в эпоху Наполеоновских войн.",
              features: ["Классика", "Историческая точность", "Большое произведение"]
            },
            {
              id: 4,
              title: "Гарри Поттер и философский камень",
              author: "Дж.К. Роулинг",
              price: 600,
              genre: "Фэнтези",
              description: "Первая книга о Гарри Поттере, волшебнике, который учится в Хогвартсе.",
              features: ["Магия", "Семейная сага", "Популярная серия"]
            },
            {
              id: 5,
              title: "Убийство в Восточном экспрессе",
              author: "Агата Кристи",
              price: 350,
              genre: "Детектив",
              description: "Роман о расследовании загадочного убийства на борту поезда.",
              features: ["Детектив", "Классика жанра", "Интрига"]
            },
            {
              id: 6,
              title: "Алхимик",
              author: "Пауло Коэльо",
              price: 450,
              genre: "Философия",
              description: "Философский роман о поисках счастья и самопознания.",
              features: ["Мотивационная книга", "Мудрость", "Бестселлер"]
            },
          ]
        }
    res.render('index',bookInfo)
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



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active")); 
            this.classList.add("active"); 
        });
    });
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });
});
