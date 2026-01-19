import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Componentes/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
O componente Input permite que usuários insiram dados de texto. Ele suporta diferentes
tamanhos, estados e pode incluir ícones, labels e mensagens de ajuda ou erro.

## Quando usar

- Para coletar informações de texto do usuário
- Em formulários de cadastro, login, busca
- Para campos de entrada de dados simples

## Quando não usar

- Para textos longos (use Textarea)
- Para seleção de opções (use Select, Radio ou Checkbox)
- Para entrada de datas (use DatePicker)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do input',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Se true, ocupa toda a largura',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    helperText: 'Enviaremos um email de confirmação',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    error: 'Email inválido',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Não pode editar',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Input pequeno',
    size: 'sm',
    placeholder: 'Tamanho pequeno',
  },
};

export const Medium: Story = {
  args: {
    label: 'Input médio',
    size: 'md',
    placeholder: 'Tamanho médio',
  },
};

export const Large: Story = {
  args: {
    label: 'Input grande',
    size: 'lg',
    placeholder: 'Tamanho grande',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Buscar produtos...',
    leftIcon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'seu@email.com',
    rightIcon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m19 5-7 5-7-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Input de largura completa',
    placeholder: 'Ocupa 100% da largura',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const FormExample: Story = {
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '400px' }}>
      <Input label="Nome completo" placeholder="João Silva" required />
      <Input
        label="Email"
        type="email"
        placeholder="joao@example.com"
        helperText="Usaremos para entrar em contato"
      />
      <Input
        label="Senha"
        type="password"
        placeholder="••••••••"
        helperText="Mínimo de 8 caracteres"
      />
      <Input
        label="Confirmar senha"
        type="password"
        placeholder="••••••••"
        error="As senhas não coincidem"
      />
    </form>
  ),
};
