import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import simpyTheme from './simpyTheme';

// Import Google Fonts - Poppins
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

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
