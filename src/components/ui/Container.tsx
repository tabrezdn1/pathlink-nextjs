'use client';

import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Standard app container with consistent responsive paddings and width
 */
export default function Container({ className = '', children }: ContainerProps) {
  return (
    <div className={`container-custom mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
