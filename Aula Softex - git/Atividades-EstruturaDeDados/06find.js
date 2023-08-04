let pedidos = [
    {'id':'420', 'nome':'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão'},
    {'id':'152', 'nome':'Naiady', 'alimento': 'Sandibão Vegano', 'bebida': 'Suco de Laranja'},
    {'id':'29', 'nome':'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva'},
    {'id':'33', 'nome':'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante'},
    {'id':'55', 'nome':'José', 'alimento': 'Pizza', 'bebida': 'Refrigereante'}
]

const pedido33 = pedidos.find((pedido) => pedido.id == 33)

console.log(pedido33)