const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

// GET - Listar produto
router.get('/', (req, res) => {
    res.json(Produto.listar());
});

// GET - Obter produto por ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const produto = Produto.obterPorId(id);
    res.json(produto);
});

// POST - Criar produto
router.post('/', (req, res) => {
    const novoProduto = req.body;
    Produto.criar(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT - Atualizar produto
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    Produto.atualizar(id, dadosAtualizados);
    res.json({ message: 'Produto atualizado com sucesso' });
});

// DELETE - Excluir produto
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Produto.excluir(id);
    res.json({ message: 'Produto excluido com sucesso' });
});

module.exports = router;