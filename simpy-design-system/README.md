# Simpy Design System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Sistema de design completo para criar experiências digitais consistentes, acessíveis e escaláveis.

## 🚀 Quick Start

### Instalação

```bash
npm install simpy-design-system
# ou
yarn add simpy-design-system
```

### Uso Básico

```tsx
import { Button, Input, Card } from 'simpy-design-system';
import 'simpy-design-system/dist/styles.css';

function App() {
  return (
    <Card>
      <h1>Bem-vindo ao Simpy Design System</h1>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Começar</Button>
    </Card>
  );
}
```

## 📚 Documentação

Para visualizar a documentação completa e todos os componentes interativos:

```bash
npm run storybook
```

Acesse: [http://localhost:6006](http://localhost:6006)

## 🎨 Características

- ✅ **Componentes React** - Biblioteca completa de componentes reutilizáveis
- ✅ **TypeScript** - Totalmente tipado para melhor experiência de desenvolvimento
- ✅ **Acessível** - Conformidade com WCAG 2.1 AA
- ✅ **Responsivo** - Funciona perfeitamente em todos os dispositivos
- ✅ **Design Tokens** - Sistema consistente de cores, tipografia e espaçamento
- ✅ **Customizável** - Fácil de personalizar para sua marca
- ✅ **Documentação** - Storybook completo com exemplos interativos

## 🧩 Componentes Disponíveis

### Componentes de Formulário
- **Button** - Botões com múltiplas variantes e tamanhos
- **Input** - Campos de entrada de texto com validação

### Layout
- **Card** - Containers para agrupar conteúdo relacionado

### Design Tokens
- **Colors** - Paleta de cores completa
- **Typography** - Sistema tipográfico
- **Spacing** - Escala de espaçamento
- **Shadows** - Sombras para elevação
- **Border Radius** - Arredondamento de cantos

## 📖 Exemplos

### Button

```tsx
<Button variant="primary" size="md">
  Clique aqui
</Button>

<Button variant="outline" size="lg" isLoading>
  Carregando...
</Button>
```

### Input

```tsx
<Input
  label="Email"
  type="email"
  placeholder="seu@email.com"
  helperText="Nunca compartilharemos seu email"
/>

<Input
  label="Senha"
  type="password"
  error="Senha muito curta"
/>
```

### Card

```tsx
<Card variant="elevated" hoverable>
  <h2>Título do Card</h2>
  <p>Conteúdo do card...</p>
</Card>
```

## 🎨 Customização

### Usando Design Tokens

```tsx
import { colors, typography, spacing } from 'simpy-design-system/tokens';

const CustomComponent = styled.div`
  color: ${colors.primary[500]};
  font-size: ${typography.fontSize.lg};
  padding: ${spacing[4]};
`;
```

## 🛠️ Desenvolvimento

### Instalar Dependências

```bash
npm install
```

### Iniciar Storybook

```bash
npm run storybook
```

### Build

```bash
npm run build
npm run build-storybook
```

## 📋 Requisitos

- Node.js >= 16
- React >= 18
- TypeScript >= 5 (opcional, mas recomendado)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🌟 Roadmap

- [ ] Mais componentes (Select, Checkbox, Radio, etc.)
- [ ] Suporte a temas customizados
- [ ] Modo escuro (Dark Mode)
- [ ] Animações e transições
- [ ] Internacionalização (i18n)
- [ ] Testes unitários completos
- [ ] Guias de migração

## 💬 Suporte

- 📧 Email: design-system@simpy.com
- 💬 Discord: [Simpy Community](https://discord.gg/simpy)
- 📖 Documentação: [https://docs.simpy.design](https://docs.simpy.design)
- 🐛 Issues: [GitHub Issues](https://github.com/simpy/design-system/issues)

## 👥 Time

Desenvolvido com ❤️ pela equipe Simpy

---

**Versão:** 1.0.0 | **Última atualização:** Janeiro 2026
