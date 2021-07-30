const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const moment = require('moment')
const Pessoa = require("./models/Pessoa")


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers:{
        formatDate: (date) =>{
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/pessoa', function(req, res){
    Pessoa.findAll().then(function(pessoas){
        res.render('pessoa', {pessoas: pessoas}); 
    })
    
});

app.get('/cad-pessoa', function(req, res){
    res.render('cad-pessoa');
});

app.post('/add-pessoa', function(req, res){
    Pessoa.create({
        nome: req.body.nome,
        email: req.body.email
    }).then(function(){
        res.redirect('/pessoa')
        //res.send("Pessoa cadastrada com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Pessoa não foi cadastrado!" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.email + "<br>") 
})

app.listen(8080);