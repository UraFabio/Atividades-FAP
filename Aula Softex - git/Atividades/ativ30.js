var usuarios = [{
    nome: 'Douglas',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Elton',
    habilidades: ['PHP', 'Ruby on Rails', 'Laravel']
  }];
  
  const apresentacao = (indice) =>{
      return `O ${usuarios[indice].nome} possui as habilidades: ${usuarios[indice].habilidades}`
  }

for(let i = 0; i < usuarios.length; i += 1){
  console.log(apresentacao(i))
}