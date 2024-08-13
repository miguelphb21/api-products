const dotenv = require('dotenv');       
dotenv.config(); 
const express =  require('express');


const cors = require('cors');     
const bodyParser = require('body-parser');
const db = require('./config/db');


const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());                            
app.use('/api/products', productsRoutes);


app.get('/', (req, res) => {
    res.send(`<body style="background-image: linear-gradient(180deg, blue, red);"><h1 style="color: red; font-size: 100px; ">Gabriel amostradinho</h1></body>`);                 
});

const port = 3000;


app.listen(port,()  => {
    console.log(`Servidor rodando na porta ${port}`)   
});