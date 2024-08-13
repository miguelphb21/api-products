const db = require('../config/db.js');


const revisarProduto = (req, res) => {
    db.query('SELECT * FROM products', (err, results)=>{
        if (err){
            console.error('Erro ao obter informação do produto', err)
            res.status(500).send('erro');
            return;
        }
        res.json(results);
    });
};


const adicionarProduto = (req, res) =>{
    const {id, name,description, category, price, stock, expiry_date} = req.body;
    db.query(
        `INSERT INTO products (name,description, category, price, stock, expiry_date) values 
        (?,?,?,?,?,?)`,
        [name,description, category, price, stock, expiry_date],
        (err, results) =>{
            if(err){
                console.error('Erro ao adicionar produto', err)
                results.status(500).send('Erro ao adicionar produto')
                return;
            }
            res.status(201).send('produto Adicionado!!')
        }
    )
}

const atualizarProduto = (req, res) =>{
    const{id} = req.params
    const {name,description, category, price, stock, expiry_date} = req.body
    db.query(
        `update products set name=?, description=?, category=?, price=?, stock=?, expiry_date=? where id=?`,
        [name,description, category, price, stock, expiry_date,id],        
        (err, results) => {
            if(err){
                console.error('Erro ao atualizar produto', err)
                res.status(500).send('Erro ao atualizar produto')
                return;
            }
            res.send('produto atualizado com sucesso')
        }
    )
}

 const atualizarColunas = (req, res) => {
    const {id} = req.params
    const fields = req.body
    const query = [];
    const values = [];
    
    for(const[key,value] of Object.entries(fields)){
        query.push(`${key} = ?`)
        values.push(value);
    }
    values.push(id)
    db.query(
    `UPDATE products SET ${query.join(',')} where id=?`,
    values,
    (err, results) => {
        if(err){
            console.error('Erro ao atualizar informações do produto', err)
            res.status(500).send('Erro')
            return;
        }
        res.send('informações do produto atualizados com sucesso!')
    }
)
}

const apagarProduto = (req, res) =>{
    const { id } = req.params
    db.query('DELETE FROM products WHERE id= ?', [id],
    (err, results)=>{
        if(err){
            console.error('Erro Ao Deletar produto',err)
            res.status(500).send('Erro ao Deletar produto')
        return;
        }
        res.send('produto Deletado Com Sucesso!')
    }
);
};


module.exports = {
    revisarProduto,
    adicionarProduto,
    atualizarProduto,
    atualizarColunas,
    apagarProduto
};
