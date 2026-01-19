import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Simpy Design System',
  brandUrl: 'https://simpy.design',
  brandImage: undefined,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#6366F1',
  colorSecondary: '#8B5CF6',

  // UI
  appBg: '#F9FAFB',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E5E7EB',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1F2937',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#6B7280',
  barSelectedColor: '#6366F1',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#D1D5DB',
  inputTextColor: '#1F2937',
  inputBorderRadius: 6,

  // Font
  fontBase: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"Fira Code", "Courier New", monospace',
});
