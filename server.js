import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';



const app = express();
const PORT = 3000;

const currentDir = fileURLToPath(import.meta.url);
const __dirname = path.dirname(currentDir);

app.use(express.static(__dirname + '/dist'));

app.get('*', function (_, res) {
    res.sendFile('/dist/index.html', {
        root: __dirname + '/',
    });
});

app.listen(PORT, function () {
    console.log(`Port ${PORT}!`);
});
