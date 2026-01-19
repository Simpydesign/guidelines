import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import simpyTheme from './simpyTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: simpyTheme,
    },
    options: {
      storySort: {
        order: [
          'Introdução',
          ['Bem-vindo', 'Como Usar', 'Instalação'],
          'Fundamentos',
          ['Visão Geral', 'Princípios', 'Acessibilidade'],
          'Design Tokens',
          ['Cores', 'Tipografia', 'Espaçamento', 'Sombras', 'Border Radius'],
          'Componentes',
          ['Visão Geral', 'Buttons', 'Inputs', 'Cards', 'Typography', 'Icons'],
          'Padrões',
          ['Formulários', 'Navegação', 'Feedback'],
        ],
      },
    },
  },
};

export default preview;
