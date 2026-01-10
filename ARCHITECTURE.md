# Documentação de Arquitetura

## 🏗️ Visão Geral da Arquitetura

Assembly Game segue uma arquitetura simples baseada em componentes React, com gerenciamento de estado centralizado no componente `App`.

```
┌─────────────────────────────────────┐
│           App.jsx                   │
│  (Estado Central: word, guesses)    │
└────────────┬──────────────┬─────────┘
             │              │
    ┌────────▼──────┐   ┌───▼────────────────┐
    │  Chip.jsx     │   │   Keyboard.jsx      │
    │ (Linguagens)  │   │  ┌─────────────────┤
    └───────────────┘   │  │ KeyboardButton   │
                        │  │ (Botões)        │
    ┌───────────────┐   │  └─────────────────┤
    │ Letter.jsx    │   │
    │ (Letras)      │   └────────────────────┘
    └───────────────┘
```

## 📊 Fluxo de Dados

### 1. Inicialização
```
App.jsx carrega com:
  - currentWord: "react"
  - guessedLetters: []
```

### 2. Interação do Usuário
```
Usuário clica → KeyboardButton → onClick() → addGuessedLetter()
                                              ↓
                                    setGuessedLetters()
                                              ↓
                                    Letter.jsx re-renderiza
```

### 3. Renderização
```
guessedLetters atualizado
       ↓
Letter.jsx verifica cada letra
       ↓
Exibe letra ou espaço em branco
```

## 🔑 Estado e Props

### Estado em App.jsx
```javascript
const [currentWord, setCurrentWord] = useState("react")
const [guessedLetters, setGuessedLetters] = useState([])
```

### Fluxo de Props
```
App
├── Chip (props: name, color, backgroundColor)
├── Letter (props: letter, guessedLetters)
├── Keyboard (props: onClick, guessedLetters, currentWord)
│   └── KeyboardButton (props: letter, isClicked, isCorrect, onClick)
└── Button (Nova Partida)
```

## 🎯 Componentes em Detalhe

### App.jsx
**Responsabilidades:**
- Gerenciar estado global do jogo
- Renderizar componentes filhos
- Coordenar interações entre componentes

**Hooks utilizados:**
- `useState` - Estado da palavra e letras adivinhas

**Funções principais:**
- `addGuessedLetter(letter)` - Adiciona letra ao array de adivinhadas

### Chip.jsx
**Responsabilidades:**
- Exibir badge visual de linguagem

**Props obrigatórias:**
- `name: string` - Nome da linguagem
- `color: string` - Cor do texto (hex)
- `backgroundColor: string` - Cor de fundo (hex)

**Exemplo:**
```jsx
<Chip 
  name="React" 
  color="#1E1E1E" 
  backgroundColor="#2ED3E9"
/>
```

### Letter.jsx
**Responsabilidades:**
- Renderizar uma única letra ou espaço em branco

**Props obrigatórias:**
- `letter: string` - A letra a exibir
- `guessedLetters: array` - Lista de letras adivinhas

**Lógica:**
```javascript
if (guessedLetters.includes(letter)) {
  exibir a letra
} else {
  exibir espaço em branco
}
```

### Keyboard.jsx
**Responsabilidades:**
- Gerenciar renderização do teclado
- Passar callbacks aos botões

**Props obrigatórias:**
- `onClick: function` - Callback ao clicar
- `guessedLetters: array` - Letras já tentadas
- `currentWord: string` - Palavra para validação

**Estrutura:**
```jsx
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
alphabet.map(letter => 
  <KeyboardButton 
    key={letter}
    letter={letter}
    isCorrect={currentWord.includes(letter)}
    isClicked={guessedLetters.includes(letter)}
    onClick={onClick}
  />
)
```

### KeyboardButton.jsx
**Responsabilidades:**
- Renderizar botão individual
- Aplicar estilos baseado no estado
- Invocar callback de clique

**Props obrigatórias:**
- `letter: string` - Letra do botão
- `isClicked: boolean` - Se foi clicado
- `isCorrect: boolean` - Se acertou a letra
- `onClick: function` - Callback de clique

**Estados visuais:**
- Padrão: Botão normal
- Clicado + Correto: Destacado em verde
- Clicado + Errado: Destacado em vermelho
- Desabilitado: Quando já foi clicado

## 🎨 Dados

### languages.js
Array de objetos com configuração de linguagens:
```javascript
{
  name: "React",
  backgroundColor: "#2ED3E9",
  color: "#1E1E1E"
}
```

**Como adicionar nova linguagem:**
1. Adicione novo objeto ao array
2. Escolha cores que contrastem bem
3. Atualize a cor de fundo e texto para acessibilidade

## 🔄 Ciclo de Vida do Jogo

```
1. GAME_START
   └─ Seleciona palavra aleatória
   └─ Reseta guessedLetters

2. PLAYING
   └─ Usuário clica em letra
   └─ addGuessedLetter() é chamado
   └─ Componentes re-renderizam

3. GAME_END
   └─ Win: Todas letras adivinhadas
   └─ Loss: 8 tentativas esgotadas
   └─ Exibe status e botão "New Game"
```

## 🚀 Performance

### Otimizações Atuais
- Componentes funcionais com hooks
- Renderização condicional no Letter.jsx
- Array de linguagens em módulo separado

### Possíveis Melhorias
- Memoização de componentes com `React.memo`
- useCallback para otimizar callbacks
- useEffect para side effects
- Lazy loading de componentes

## 🧩 Padrões de Código

### Padrão 1: Renderização de Listas
```jsx
const elements = items.map((item, id) => 
  <Component key={id} {...item} />
)
return <section>{elements}</section>
```

### Padrão 2: Callback Props
```jsx
function Parent() {
  function handleClick(value) {
    // atualiza estado
  }
  return <Child onClick={handleClick} />
}

function Child({ onClick }) {
  return <button onClick={() => onClick(data)}>Click</button>
}
```

### Padrão 3: Renderização Condicional
```jsx
function Letter({ letter, guessedLetters }) {
  return (
    <div>
      {guessedLetters.includes(letter) ? letter : ''}
    </div>
  )
}
```

## 🐛 Debug

### Ferramentas Recomendadas
- React Developer Tools (Chrome Extension)
- VS Code Debugger
- Console do navegador

### Dicas de Debug
1. Use `console.log()` para rastrear mudanças de estado
2. Verifique props com `console.log(props)`
3. Use React DevTools para inspecionar estado
4. Verifique rede no DevTools Network tab

## 📈 Escalabilidade

Para expandir o projeto:

### Adicionar Dificuldades
```javascript
const difficulties = {
  easy: { attempts: 12, words: [...] },
  medium: { attempts: 8, words: [...] },
  hard: { attempts: 5, words: [...] }
}
```

### Adicionar Sistema de Pontos
```javascript
const [score, setScore] = useState(0)
// Atualizar score ao ganhar/perder
```

### Adicionar Persistência
```javascript
// LocalStorage ou banco de dados
localStorage.setItem('highscores', JSON.stringify(scores))
```

### Adicionar Multiplayer
```javascript
// WebSocket ou Realtime Database
// Socket.io para comunicação em tempo real
```

## 📚 Referências

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JavaScript.com](https://www.javascript.com)
- [Web Accessibility](https://www.w3.org/WAI/)
