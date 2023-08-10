import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { engine } from "express-handlebars";
import handlebars from 'handlebars';

// const handlebars = require('handlebars');

import {resolve} from 'path'
/*import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

import card from "./src/layouts/card/card";

import profile from "./src/layouts/profile-container/profile-container";
import avatarChange from "./src/layouts/avatar-change/avatar-card"; */

// console.log(handlebars)

// Компилируем шаблон


const app = express();
const PORT = 3000;

const currentDir = fileURLToPath(import.meta.url);
const __dirname = path.dirname(currentDir);

app.engine("handlebars", engine({
    extname: ".hbs",
    defaultLayout: "src/partials/layouts/page",
    layoutsDir: path.resolve(__dirname, "src/layouts"),
    partialsDir: path.resolve(__dirname, "src/partials"),
  }));

  app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "src"));

app.use(express.static(__dirname + '/'));

app.get('*', function (_, res) {
    res.sendFile('/index.html', {
        root: __dirname + '/',
    });
});

app.listen(PORT, function () {
    console.log(`Port ${PORT}!`);
});