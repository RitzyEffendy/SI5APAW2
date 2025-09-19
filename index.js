const express = require("express"); // Impor module express
const app = express(); // Buat express application
const port = 3000; // Port yang akan digunakan

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    // res.send("Hello world");
    const news = [
        {id: 1, title: "Belajar Express", content: "..."},
        {id: 2, title: "Kampung SI 2025", content: "..."},
        {id: 3, title: "Stand baru kantin MDP : Bakso Meletup", content: "..."}
    ];
    res.render('index', {news});
})

app.get("/about", (req, res) => {
    // res.send("About Us");
    res.render('about');
})

app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact');
})

app.get("/mahasiswa", (req, res) => {
    res.json({
        status: "success",
        message: "Data Mahasiswa",
        data: ["Ritzy", "Noval", "Marcell"]
    })
})

app.get("/nilai", (req, res) => {
    res.json({
        status: "success",
        message: "Data Nilai",
        data: [
            {mk: "Bahasa Indonesia", nilai: "A"},
            {mk: "PAW 1", nilai: "A"},
            {mk: "PAW 2", nilai: "B+"}
        ]
    })
})

app.get("/fakultas/:id", (req, res) => {
    // res.send(`Fakultas id : ${req.params.id}`);
    res.send("Fakultas ID: " + req.params.id);
})

app.get("/prodi", (req, res) => {
    const prodi = [
        {kode: 24, nama: "Sistem Informasi", singkatan: "SI", fakultas: "Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 25, nama: "Informatika", singkatan: "IF", fakultas: "Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 11, nama: "Manajemen Informatika", singkatan: "MI", fakultas: "Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 27, nama: "Teknik Elektro", singkatan: "TE", fakultas: "Fakultas Ilmu Komputer dan Rekayasa"},
        {kode: 20, nama: "Manajemen", singkatan: "MJ", fakultas: "Fakultas Ekonomi dan Bisnis"},
        {kode: 21, nama: "Akuntansi", singkatan: "AK", fakultas: "Fakultas Ekonomi dan Bisnis"},
    ];
    res.render('prodi', {prodi, title: "Program Studi"});
})

// Jika route yang diakses tidak terdaftar, maka ditampilkan "Not Found"
app.use("/", (req, res) => {
    res.status(404); // Http response code (not found)
    res.send("<h1>Not Found</h1>");
})

app.listen(port, () => {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})