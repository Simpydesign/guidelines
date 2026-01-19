import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Componentes/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
O componente Card é um container versátil que agrupa informações relacionadas.
É ideal para apresentar conteúdo de forma organizada e visual.

## Quando usar

- Para agrupar informações relacionadas
- Para apresentar produtos ou itens em uma lista
- Para criar dashboards e painéis
- Para destacar conteúdo importante

## Quando não usar

- Para navegação principal (use Menu)
- Para mensagens de feedback (use Alert)
- Para conteúdo sequencial longo (use Typography)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'Variante visual do card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Padding interno do card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Adiciona efeito hover',
    },
    clickable: {
      control: 'boolean',
      description: 'Torna o card clicável',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Card Título
        </h3>
        <p style={{ margin: 0, color: '#6B7280' }}>
          Este é um exemplo de conteúdo dentro de um card.
        </p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Card Elevado
        </h3>
        <p style={{ margin: 0, color: '#6B7280' }}>
          Card com sombra para destacar do fundo.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Card com Borda
        </h3>
        <p style={{ margin: 0, color: '#6B7280' }}>
          Card com borda sólida, sem sombra.
        </p>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Card Preenchido
        </h3>
        <p style={{ margin: 0, color: '#6B7280' }}>
          Card com fundo colorido.
        </p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Card Interativo
        </h3>
        <p style={{ margin: 0, color: '#6B7280' }}>
          Passe o mouse sobre este card para ver o efeito.
        </p>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    hoverable: true,
    onClick: () => alert('Card clicado!'),
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Card Clicável
        </h3>
        <p style={{ margin: 0, color: '#6B7280' }}>
          Clique neste card para ver a ação.
        </p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    variant: 'outlined',
    children: <div>Card com padding pequeno</div>,
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    variant: 'outlined',
    children: (
      <div>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Placeholder"
          style={{ width: '100%', borderRadius: '0.75rem 0.75rem 0 0' }}
        />
        <div style={{ padding: '1rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Card com Imagem</h3>
          <p style={{ margin: 0, color: '#6B7280' }}>
            Card sem padding, útil para imagens.
          </p>
        </div>
      </div>
    ),
  },
};

export const ProductCard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      {[1, 2, 3].map((i) => (
        <Card key={i} padding="none" hoverable clickable>
          <img
            src={`https://via.placeholder.com/300x200?text=Produto+${i}`}
            alt={`Produto ${i}`}
            style={{ width: '100%', borderRadius: '0.75rem 0.75rem 0 0' }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem' }}>
              Produto {i}
            </h3>
            <p style={{ margin: '0 0 1rem 0', color: '#6B7280', fontSize: '0.875rem' }}>
              Descrição do produto {i}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#6366F1' }}>
                R$ {(i * 99.90).toFixed(2)}
              </span>
              <button
                style={{
                  background: '#6366F1',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  ),
};

export const DashboardCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      <Card variant="filled">
        <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
          Total de Usuários
        </div>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937' }}>
          1,234
        </div>
        <div style={{ fontSize: '0.875rem', color: '#22C55E', marginTop: '0.5rem' }}>
          +12% este mês
        </div>
      </Card>
      <Card variant="filled">
        <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
          Vendas
        </div>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937' }}>
          R$ 45,678
        </div>
        <div style={{ fontSize: '0.875rem', color: '#22C55E', marginTop: '0.5rem' }}>
          +8% este mês
        </div>
      </Card>
      <Card variant="filled">
        <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>
          Taxa de Conversão
        </div>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937' }}>
          3.24%
        </div>
        <div style={{ fontSize: '0.875rem', color: '#EF4444', marginTop: '0.5rem' }}>
          -2% este mês
        </div>
      </Card>
    </div>
  ),
};
