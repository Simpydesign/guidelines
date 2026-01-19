import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
O componente Button é usado para disparar ações e eventos. Ele vem em várias variantes,
tamanhos e estados para se adequar a diferentes contextos de uso.

## Quando usar

- Para ações principais como "Salvar", "Enviar", "Confirmar"
- Para navegação entre páginas ou seções
- Para abrir modais ou painéis
- Para submeter formulários

## Quando não usar

- Para navegação externa (use \`<a>\` tag)
- Para alternar estados (use Toggle ou Switch)
- Para selecionar opções (use Radio ou Checkbox)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Se true, o botão ocupa toda a largura disponível',
    },
    isLoading: {
      control: 'boolean',
      description: 'Exibe um indicador de loading',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button Ghost',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
