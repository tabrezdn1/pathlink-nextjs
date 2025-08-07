'use client';

import React from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'glass';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  outline: 'btn-outline',
  glass: 'btn-glass',
};

export default function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${variantClass[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    />
  );
}
