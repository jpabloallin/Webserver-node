import express from 'express';
import path from 'path';
import hbs from 'hbs';
import 'dotenv/config';

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( path.resolve() + '/views/partials' );

// Servir contnido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Pablo Allin',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Pablo Allin',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Pablo Allin',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve() + '/public/404.html');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})