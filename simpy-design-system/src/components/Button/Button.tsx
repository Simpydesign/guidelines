import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante visual do botão
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /**
   * Tamanho do botão
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Se true, o botão ocupa 100% da largura
   */
  fullWidth?: boolean;
  /**
   * Conteúdo do botão
   */
  children: React.ReactNode;
  /**
   * Estado de loading
   */
  isLoading?: boolean;
}

/**
 * Componente Button do Simpy Design System
 *
 * Botões permitem que usuários executem ações e façam escolhas com um único toque.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  isLoading = false,
  disabled,
  className = '',
  ...props
}) => {
  const classNames = [
    'simpy-button',
    `simpy-button--${variant}`,
    `simpy-button--${size}`,
    fullWidth && 'simpy-button--full-width',
    isLoading && 'simpy-button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="simpy-button__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="simpy-button__spinner-icon">
            <circle
              className="simpy-button__spinner-circle"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              strokeWidth="3"
            />
          </svg>
        </span>
      )}
      <span className={isLoading ? 'simpy-button__content--hidden' : ''}>
        {children}
      </span>
    </button>
  );
};

export default Button;
