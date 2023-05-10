const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const countries = require('./Data/Countries.json');
const chefs = require('./Data/Chefs.json');
const chefData = require('./Data/ChefData.json');
const deshi = require('./Data/DeshiFood.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Recipe Maker!')
});

app.get('/countries', (req, res) => {
    res.send(countries);
});

app.get('/chef_data', (req, res) => {
    res.send(chefData);
});

app.get('/deshi', (req, res) => {
    res.send(deshi);
});

// app.get('/recipe/:id',(req, res)=>{
//     const id =req.params.id;
//     if(id==0){
//         res.send()
//     }
// })


app.listen(port, () => {
    console.log(`Recipe Maker listening on port ${port}`)
})