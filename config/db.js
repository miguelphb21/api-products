
const mysql = require('mysql2'); 



const db = mysql.createConnection(
    {
    host:process.env.DB_HOST, 
    user:process.env.DB_USER, 
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
    }
);

db.connect((err) =>{
    if (err){
        console.error('Erro ao conectar ao Banco de Dados',err);
        return; 
    }
    console.log(`Conectado ao banco ${process.env.DB_NAME}`);
});

module.exports = db