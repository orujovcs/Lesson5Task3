const express = require('express');
const app = express();
const goods = [
    {id : 1, name : "Naz-Lifan", price : 12000, count : 5},
    {id : 2, name : "Cherry", price : 20000, count : 3},
    {id : 3, name : "FAW", price : 50000, count : 1},
    {id : 4, name : "BMW", price : 100000, count : 2},
    {id : 5, name : "Toyota", price : 45000, count : 4},
    {id : 6, name : "Audi", price : 150000, count : 3},
    {id : 7, name : "Mercedes", price : 200000, count : 1},
    {id : 8, name : "Nissan", price : 25000, count : 5},
    {id : 9, name : "Chevrolet", price : 30000, count : 2},
    {id : 10, name : "Lada", price : 7000, count : 10},
];
app.get('/', function (req, res) {
    res.send('Add /good/:id to get card number or /goods for get all goods');
});
app.get('/good/:id', function (req, res) {
    if(req.params.id > goods.length || req.params.id < 0){
        res.send("Error 404");
    }
    else{
        let id = 0;
        goods.forEach((good) =>{
            if(good.id == req.params.id){
                id = good.id
            }
        });
        res.send(goods[id - 1]);
    }
});
app.get('/goods', function (req, res) {
    res.send(goods);
});

app.get('/good', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
  });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});