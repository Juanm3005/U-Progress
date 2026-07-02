import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));

//configuracion de archivos estaticos
app.use(express.static(__dirname + "/public"));

//rutas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/pages/register.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
});
