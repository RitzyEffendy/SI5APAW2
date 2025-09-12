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
    res.send("Contact Us");
})

app.listen(port, () => {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})