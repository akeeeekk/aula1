const produtos = [];

class Produto{
    static listar(){
        return produtos;
    }

    static obterPorId(id){
        return produtos.find(produto => produto.id === id);
            }

    static criar (produto){
    produto.id = produtos.length +1
    produtos.push(produto);
    }   

    static atualizar(id, dadosAtualizados){
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1){
        produtos[index] = { ...produtos[index], ...dadosAtualizados}
    }
    }

    static excluir(id) {
        id = Number(id); // Converter id para número
        const index = produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            produtos.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = Produto;