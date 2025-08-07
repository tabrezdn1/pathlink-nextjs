'use client';

import React from 'react';

type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode;
};

/**
 * Semantic section wrapper with default vertical spacing
 */
export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`section-padding overflow-x-hidden ${className}`}>
      {children}
    </section>
  );
}
