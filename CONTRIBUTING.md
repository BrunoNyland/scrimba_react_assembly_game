# 🤝 Guia de Contribuição

Obrigado por querer contribuir ao Assembly Game! Este documento oferece orientações para ajudar você a contribuir efetivamente.

## 📋 Código de Conduta

Seja respeitoso com outros contribuidores e mantenha um ambiente inclusivo e acolhedor.

## 🐛 Reportando Bugs

Se encontrar um bug, por favor:

1. **Verifique** se o bug já foi reportado em Issues
2. **Descreva** detalhadamente o comportamento esperado vs atual
3. **Forneça** exemplos específicos para reproduzir
4. **Inclua** screenshots ou prints de tela se relevante
5. **Mencione** seu ambiente (navegador, OS, versão Node.js)

### Exemplo de Issue

```
**Título:** Botão do teclado não responde ao clique em mobile

**Descrição:**
Os botões do teclado não registram cliques em dispositivos móveis.

**Passos para reproduzir:**
1. Abrir jogo em iPhone/Android
2. Tentar clicar em qualquer botão
3. Nenhuma ação ocorre

**Resultado esperado:**
A letra deve ser selecionada

**Ambiente:**
- Browser: Safari iOS 17
- Dispositivo: iPhone 13
- Node.js: 18.0.0
```

## 💡 Sugerindo Melhorias

Abra uma Issue com:
- **Título** claro e descritivo
- **Descrição** detalhada da feature
- **Casos de uso** e benefícios
- **Exemplos** de implementação, se possível

## 🔧 Processo de Desenvolvimento

### 1. Fork e Clone

```bash
# Faça um fork do repositório no GitHub
git clone https://github.com/SEU-USERNAME/scrimba_react_assembly_game.git
cd scrimba_react_assembly_game
```

### 2. Crie uma Branch

```bash
git checkout -b feature/sua-feature
# ou para bug fix
git checkout -b fix/descricao-do-bug
```

**Convenção de nomes:**
- Features: `feature/nome-descritivo`
- Bugs: `fix/descricao-curta`
- Docs: `docs/topico`

### 3. Faça suas Alterações

- Siga as [convenções de código](#📝-convenções-de-código)
- Teste suas mudanças localmente
- Mantenha commits organizados e com mensagens claras

### 4. Commit com Mensagens Descritivas

```bash
git commit -m "feat: adiciona novas linguagens de programação"
git commit -m "fix: corrige layout do teclado em mobile"
git commit -m "docs: atualiza README com novos comandos"
```

**Prefixos de commit:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Formatação, sem mudança de lógica
- `refactor:` - Refatoração sem feature ou fix
- `test:` - Adição de testes
- `chore:` - Atualizações de build, deps

### 5. Push e Pull Request

```bash
git push origin feature/sua-feature
```

**No GitHub:**
- Clique em "Compare & pull request"
- Descreva suas mudanças
- Referencie issues relacionadas com `#numero`
- Aguarde review

## 📝 Convenções de Código

### Estrutura de Componentes

```jsx
import { useState } from 'react'

/**
 * Descrição breve do componente
 * @param {Object} props - Props do componente
 * @param {string} props.name - Descrição da prop
 */
export default function MyComponent({ name }) {
  const [state, setState] = useState(null)

  function handleClick() {
    // implementação
  }

  return <div className="component">{name}</div>
}
```

### Nomes

- **Componentes**: `PascalCase` (ex: `KeyboardButton`)
- **Funções**: `camelCase` (ex: `addGuessedLetter`)
- **Constantes**: `UPPER_SNAKE_CASE` (ex: `MAX_ATTEMPTS = 8`)
- **Classes CSS**: `kebab-case` (ex: `game-status`)

### Formatação

- 2 espaços para indentação
- Linha máxima de 80 caracteres
- Sem ponto-e-vírgula ao final de linhas (já é padrão ESLint)

### Comentários

```jsx
// Comentário de linha única

/*
 * Comentário em bloco
 * para explicações maiores
 */

/**
 * JSDoc para funções e componentes
 * @param {type} name - Descrição
 * @returns {type} Descrição do retorno
 */
```

## 🧪 Testes

Quando adicionar features, considere:

1. **Testar manualmente** no navegador
2. **Testar em mobile** (responsividade)
3. **Testar com ESLint**: `npm run lint`
4. **Verificar performance** no DevTools

## 📚 Documentação

Ao adicionar features:
- Atualize `README.md` se necessário
- Documente novos componentes com comentários
- Adicione exemplos de uso se relevante

## 🚀 Checklist Antes de Submeter PR

- [ ] Código segue as convenções do projeto
- [ ] ESLint passa sem erros
- [ ] Testei manualmente as mudanças
- [ ] Atualizei a documentação se necessário
- [ ] Commits têm mensagens descritivas
- [ ] Removi código de debug ou comentários desnecessários
- [ ] Não há conflitos com a branch main

## 📞 Precisa de Ajuda?

- Abra uma Discussion para perguntas
- Comente em Issues existentes
- Consulte a documentação principal em `README.md`

## 🎉 Obrigado!

Sua contribuição torna este projeto melhor para todos!
