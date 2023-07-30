
#Código de acordo com o enunciado da questão:

nome = input("Digite seu nome completo: ")

while(True):
    while(True):
        try:
            ano_nascimento = int(input("Digite o seu ano de nascimento: "))
            break
        except ValueError:
            print("\n----------------------------------")
            print("VOCÊ DEVE PREENCHER APENAS COM NÚMERO, DIGITE NOVAMENTE:")
            print("----------------------------------\n")
    if(ano_nascimento < 1922 or ano_nascimento > 2021):
        print("----------------------------------")
        print("\nINFORME UM ANO VÁLIDO (entre 1922 e 2021), DIGITE NOVAMENTE:\n")
        print("----------------------------------")
        continue
    break
print(f"\nNome: {nome}")
print(f"Você completou ou completará {2022 - ano_nascimento} anos este ano (2022).\n\n")


#Código de acordo com o ano atual (2023):

nome = input("Digite seu nome completo: ")

while(True):
    while(True):
        try:
            ano_nascimento = int(input("Digite o seu ano de nascimento: "))
            break
        except ValueError:
            print("\n----------------------------------")
            print("VOCÊ DEVE PREENCHER APENAS COM NÚMERO, DIGITE NOVAMENTE:")
            print("----------------------------------\n")
    if(ano_nascimento < 1922 or ano_nascimento > 2022):
        print("----------------------------------")
        print("\nINFORME UM ANO VÁLIDO (entre 1922 e 2021), DIGITE NOVAMENTE:\n")
        print("----------------------------------")
        continue
    break
print(f"\nNome: {nome}")
print(f"Você completou ou completará {2023 - ano_nascimento} anos este ano (2022).")
