const express = require('express')

const app = express()

// setup view engine with ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let text = "Hello world";
    let dataSiswa = [
        {nama: "Dimas", age: 19},
        {nama: "Rumondang", age: 20},
        {nama: "Chris", age: 21},
    ]

    res.render('pages/home', {
        text: text,
        dataSiswa: dataSiswa
    })
})

app.get('/about', (req, res) => {
    let bioData = "Biodata";
    let dataProfile = [
        {name: "Mondang",
         age: 20,
         placeOfBirth: "New York",
         address: "New York",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla porttitor massa id neque aliquam."
         },
    ]
    res.render('pages/about'),{
        bioData: bioData,
        dataProfile: dataProfile
    }
})

app.listen(5000, () => {
    console.log('Server is running');
})