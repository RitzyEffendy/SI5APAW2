const express = require("express"); // Impor module express
const app = express(); // Buat express application
const port = 3000; // Port yang akan digunakan

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/about", (req, res) => {
    res.send("About Us");
})

app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
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

// Jika route yang diakses tidak terdaftar, maka ditampilkan "Not Found"
app.use("/", (req, res) => {
    res.status(404); // Http response code (not found)
    res.send("<h1>Not Found</h1>");
})

app.listen(port, () => {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})