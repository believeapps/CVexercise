const express = require('express'); //Requerimos express en nuestro proyecto;
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const public_html = path.join(__dirname, 'public')


function expressServer() {
    
    //bodyparser setup
    app.use('/contacto',bodyParser.urlencoded({ extended: false }));
    
    //Boostrap CSS
    app.use('/css',express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))
    //Boostrap JS
    app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/js')))
    //Public content
    app.use(express.static(path.join(__dirname, 'public')))
    app.get('/', (req, res) => {
        res.sendFile(`${public_html}/views/index.html`)
    }).listen(3000); 
    
    app.post('/contact', (req, res) => {
        
        const data = req.rawBody
        
        const postBody = req.body;
        let email = postBody.email;
        let phone = postBody.number;
        let reason = postBody.motivo;
        let message = postBody.mensaje;
        console.log(email, phone, reason, message); //Recover the values on the form
        res.sendFile(`${public_html}/views/index.html`)
    })
    
    app.route('/experiencia').get((req, res) => {
        res.sendFile(`${public_html}/views/experiencia.html`)
    })
    
    app.route('/estudios').get((req, res) => {
        res.sendFile(`${public_html}/views/estudios.html`)
    })
}

exports.expressServer = expressServer;