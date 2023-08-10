import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
// import { engine } from "express-handlebars";

const app = express();
const PORT = 3000;

const currentDir = fileURLToPath(import.meta.url);
const __dirname = path.dirname(currentDir);

app.use(express.static(__dirname + '/'));

app.get('*', function (_, res) {
    res.sendFile('/index.html', {
        root: __dirname + '/',
    });
});

app.listen(PORT, function () {
    console.log(`Port ${PORT}!`);
});