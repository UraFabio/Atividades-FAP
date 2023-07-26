def calculadora(n1, n2, op):
    if op == 1:
        return n1+ n2
    elif op == 2:
        return n1-n2
    elif op == 3:
        return n1*n2
    elif op == 4:
        return n1/n2
    else:
        return 0
    
operacao = int(input("Escola a operacao a ser realizada, digite: \n>'1' para adicao;\n>'2' para subtracao;\n>'3' para multiplicacao;\n>'4' para divisao;\n>>"))
numero1 = int(input("Digite o primeiro numero:"))
numero2 = int(input("Digite o segundo numero: "))
print(calculadora(numero1, numero2, operacao))