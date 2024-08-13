const express = require('express'); // Importar o express
const router = express.Router(); // Criar um roteador
const transactionsController = require('../controllers/productsController'); // Importar o contolador 

// Definir uma rota para obter todas as transações;
router.get('/', transactionsController.revisarProduto);

// Definindo uma rota para adicionar uma nova transação;
router.post('/', transactionsController.adicionarProduto);

// Definido uma rota para Atualizar uma transação existente (substituição completa);
router.put('/:id', transactionsController.atualizarProduto)

// Definido uma rota para Atualizar uma transação existente (substituição parcial);
router.patch('/:id', transactionsController.atualizarColunas)

router.delete('/:id', transactionsController.apagarProduto)



// Exportar o roteador

module.exports = router;

