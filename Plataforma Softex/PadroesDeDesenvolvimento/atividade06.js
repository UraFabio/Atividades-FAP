const EventEmitter = require('events');

// Classe Editor base
class Editor extends EventEmitter {
  constructor() {
    super();
    this.text = [];
  }

  open() {
    this.emit('open');
  }

  save() {
    this.emit('save');
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  constructor() {
    super();
  }

  insertLine(lineNumber, text) {
    // Inserir o texto na linha especificada
    this.text.splice(lineNumber - 1, 0, text);
  }

  removeLine(lineNumber) {
    // Remover o texto da linha especificada
    this.text.splice(lineNumber - 1, 1);
  }

  processInput() {
    console.log('Digite as linhas de texto (Digite "EOF" para encerrar):');
    const stdin = process.openStdin();

    stdin.addListener('data', (input) => {
      const userInput = input.toString().trim();

      if (userInput === 'EOF') {
        this.save();
        console.log('Conteúdo salvo e editor encerrado.');
        process.exit(0);
      } else {
        this.insertLine(this.text.length + 1, userInput);
      }
    });
  }
}

// Criar uma instância de TextEditor
const textEditor = new TextEditor();

// Manipular eventos
textEditor.on('open', () => {
  console.log('Editor de Texto Aberto');
});

textEditor.on('save', () => {
  console.log('Conteúdo Salvo:');
  console.log(textEditor.text.join('\n'));
});

// Iniciar o editor
textEditor.open();
textEditor.processInput();
