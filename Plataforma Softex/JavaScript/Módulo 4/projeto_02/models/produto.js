//models/produto.js

module.exports = (sequelize, dataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: dataTypes.TEXT,
            allowNull: true
        }
    });

    return Produto;
}