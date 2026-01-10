# 🎮 Assembly Game

Um jogo educativo e divertido de adivinhar palavras construído com React e Vite. O objetivo é adivinhar a palavra antes de acumular 8 tentativas erradas e deixar a linguagem de programação Assembly assumir o controle!

## 📋 Sobre o Projeto

**Assembly Game** é um jogo de adivinhação tipo "Hangman" com temática de linguagens de programação. Os jogadores têm 8 tentativas para adivinhar a palavra secreta. O projeto foi desenvolvido com foco em:

- 🚀 Performance otimizada com Vite
- ⚛️ Componentes React reutilizáveis
- 🎨 Interface visual atraente e responsiva
- 🔤 Múltiplas linguagens de programação como tema

## 🛠️ Stack Tecnológico

- **React** 19.2.0 - Framework UI
- **Vite** 7.2.4 - Build tool e dev server
- **ESLint** - Linter de código
- **Bun** - Package manager
- **Google Fonts** - Fonte Hanken Grotesk

## 📁 Estrutura do Projeto

```
src/
├── App.jsx              # Componente principal da aplicação
├── Chip.jsx             # Componente que exibe badges de linguagens
├── Letter.jsx           # Componente que exibe letras da palavra
├── Keyboard.jsx         # Componente que renderiza o teclado
├── KeyboardButton.jsx   # Componente individual dos botões do teclado
├── languages.js         # Dados das linguagens de programação
├── index.css            # Estilos globais
└── main.jsx             # Ponto de entrada da aplicação
```

## 🎯 Componentes

### App.jsx
O componente raiz que gerencia:
- Estado da palavra atual (`currentWord`)
- Letras adivinhas (`guessedLetters`)
- Renderização geral do jogo

### Chip.jsx
Exibe badges coloridas das linguagens de programação.

**Props:**
- `name` - Nome da linguagem
- `color` - Cor do texto
- `backgroundColor` - Cor de fundo

### Letter.jsx
Exibe uma letra ou espaço em branco se não foi adivinhada.

**Props:**
- `letter` - A letra a exibir
- `guessedLetters` - Array de letras já adivinhadas

### Keyboard.jsx
Gerencia o teclado interativo com todos os botões alfabéticos.

**Props:**
- `onClick` - Callback ao clicar em uma letra
- `guessedLetters` - Letras já tentadas
- `currentWord` - Palavra atual para validação

### KeyboardButton.jsx
Botão individual do teclado.

**Props:**
- `letter` - Letra do botão
- `isClicked` - Estado se foi clicado
- `isCorrect` - Se está na palavra
- `onClick` - Callback de clique

## 📦 Como Instalar

### Pré-requisitos
- Node.js 18+ ou Bun instalado

### Passos

1. **Clone o repositório:**
```bash
git clone https://github.com/BrunoNyland/scrimba_react_assembly_game.git
cd scrimba_react_assembly_game
```

2. **Instale as dependências:**
```bash
# Com npm
npm install

# Ou com bun
bun install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
# ou
bun run dev
```

4. **Abra no navegador:**
```
http://localhost:5173
```

## 🚀 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Cria build otimizada para produção |
| `npm run preview` | Prévia da build de produção |
| `npm run lint` | Executa verificações ESLint |

## 🎮 Como Jogar

1. Uma palavra secreta é selecionada
2. Clique nas letras do teclado para fazer suas tentativas
3. Se acertar a letra, ela aparecerá na palavra
4. Se errar, você perde uma tentativa (máx 8)
5. Ganhe adivinhando todas as letras antes das 8 tentativas
6. Clique em "New Game" para começar uma nova partida

## 🎨 Linguagens Temáticas

O projeto inclui badges para as seguintes linguagens:

- HTML (#E2680F)
- CSS (#328AF1)
- JavaScript (#F4EB13)
- React (#2ED3E9)
- TypeScript (#298EC6)
- Node.js (#599137)
- Assembly (Tema principal do jogo)

Todas as linguagens são customizáveis no arquivo `languages.js`.

## 📝 Convenções de Código

- **Componentes**: PascalCase (ex: `KeyboardButton.jsx`)
- **Funções**: camelCase (ex: `addGuessedLetter()`)
- **Constantes**: UPPER_SNAKE_CASE ou camelCase para arrays de dados
- **Props**: camelCase e bem documentadas

## 🔄 Fluxo de Estado

```
App (Estado Principal)
├── currentWord: string
├── guessedLetters: array
└── addGuessedLetter(): function
    └── Propagado para Keyboard → KeyboardButton
```

## 🚢 Deploy

Para fazer deploy da aplicação, você pode usar plataformas como:

- **Vercel**: `npm run build && vercel`
- **Netlify**: Conectar repositório diretamente
- **GitHub Pages**: Configurar em vite.config.js e fazer push

## 📄 Licença

Este projeto é parte do currículo Scrimba e está disponível publicamente.

## 👨‍💻 Autor

**Bruno Nyland**  
GitHub: [BrunoNyland](https://github.com/BrunoNyland)  
Repositório: [scrimba_react_assembly_game](https://github.com/BrunoNyland/scrimba_react_assembly_game)

## 🤝 Contribuições

Sugestões e pull requests são bem-vindas! Sinta-se livre para:

- Reportar bugs
- Adicionar novas linguagens
- Melhorar a interface
- Otimizar o desempenho

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vitejs.dev)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Google Fonts](https://fonts.google.com)
