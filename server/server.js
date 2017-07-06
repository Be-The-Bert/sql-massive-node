const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const config = require('./config');
const productsCtrl = require('./productsCtrl');

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
massive( config.connectionString ).then( dbInstance => app.set('db', dbInstance) ).catch( (err) => console.log(err) );

app.get('/api/products', productsCtrl.getAll);
app.get('/api/product/:id', productsCtrl.getOne);

app.put('/api/product/:id', productsCtrl.update);

app.post('/api/product', productsCtrl.create);

app.delete('/api/product/:id', productsCtrl.delete);

app.listen(config.port, ()=> {
    console.log(`Server listening on port ${config.port}`)
});