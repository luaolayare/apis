
var express = require('express')
var app = express();
var puerto = 3000;

app.get('/', function(request, response){
    response.send('<h1>Hola')
})

app.listen(puerto,function(){
    console.log('servidor funcionando por el puerto' + puerto)
})

/*Ejercicio suma*/

app.get('/Sumar/:valor1/:valor2', function(request, response){
    var a = parseInt( request.params.valor1)
    var b = parseInt( request.params.valor2)
    var c = a+b
    console.log(a+b)
    response.send('el valor es' + c )
})

/*Ejercicio resta*/

app.get('/Restar/:valor1/:valor2', function(request, response){
    var a = parseInt( request.params.valor1)
    var b = parseInt( request.params.valor2)
    var c = a-b
    console.log(a-b)
    response.send('el valor es' + c )
})

/*Ejercicio multiplicación*/

app.get('/Multiplicar/:valor1/:valor2', function(request, response){
    var a = parseInt( request.params.valor1)
    var b = parseInt( request.params.valor2)
    var c = a*b
    console.log(a*b)
    response.send('el valor es' + c )
})

/*Ejercicio divición*/

app.get('/Dividir/:valor1/:valor2', function(request, response){
    var a = parseInt( request.params.valor1)
    var b = parseInt( request.params.valor2)
    var c = a/b
    console.log(a/b)
    response.send('el valor es ' + c )
})