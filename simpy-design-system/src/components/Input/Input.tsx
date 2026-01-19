import React from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label do input
   */
  label?: string;
  /**
   * Mensagem de erro
   */
  error?: string;
  /**
   * Mensagem de ajuda
   */
  helperText?: string;
  /**
   * Tamanho do input
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Se true, o input ocupa 100% da largura
   */
  fullWidth?: boolean;
  /**
   * Ícone à esquerda
   */
  leftIcon?: React.ReactNode;
  /**
   * Ícone à direita
   */
  rightIcon?: React.ReactNode;
}

/**
 * Componente Input do Simpy Design System
 *
 * Inputs permitem que usuários insiram dados de texto.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    const containerClassNames = [
      'simpy-input-container',
      fullWidth && 'simpy-input-container--full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClassNames = [
      'simpy-input-wrapper',
      `simpy-input-wrapper--${size}`,
      hasError && 'simpy-input-wrapper--error',
      disabled && 'simpy-input-wrapper--disabled',
      leftIcon && 'simpy-input-wrapper--with-left-icon',
      rightIcon && 'simpy-input-wrapper--with-right-icon',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClassNames}>
        {label && (
          <label htmlFor={inputId} className="simpy-input-label">
            {label}
          </label>
        )}
        <div className={wrapperClassNames}>
          {leftIcon && (
            <span className="simpy-input-icon simpy-input-icon--left">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className="simpy-input"
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          {rightIcon && (
            <span className="simpy-input-icon simpy-input-icon--right">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <span id={`${inputId}-error`} className="simpy-input-message simpy-input-message--error">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${inputId}-helper`} className="simpy-input-message simpy-input-message--helper">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
