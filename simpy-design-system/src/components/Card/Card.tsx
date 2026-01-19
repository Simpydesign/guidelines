import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Conteúdo do card
   */
  children: React.ReactNode;
  /**
   * Variante visual do card
   */
  variant?: 'elevated' | 'outlined' | 'filled';
  /**
   * Padding do card
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * Se true, torna o card interativo com hover
   */
  hoverable?: boolean;
  /**
   * Se true, torna o card clicável
   */
  clickable?: boolean;
}

/**
 * Componente Card do Simpy Design System
 *
 * Cards são containers que agrupam informações relacionadas.
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  clickable = false,
  className = '',
  ...props
}) => {
  const classNames = [
    'simpy-card',
    `simpy-card--${variant}`,
    `simpy-card--padding-${padding}`,
    hoverable && 'simpy-card--hoverable',
    clickable && 'simpy-card--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
