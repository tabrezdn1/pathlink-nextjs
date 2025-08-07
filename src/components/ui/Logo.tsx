'use client';

import React from 'react';

type LogoProps = {
  size?: number; // tailwind units in px
  markOnly?: boolean;
  className?: string;
};

export default function Logo({ size = 32, markOnly = false, className = '' }: LogoProps) {
  const boxSize = `${size}px`;
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-lg"
        style={{ width: boxSize, height: boxSize }}
      >
        <div className="gradient-bg absolute inset-0" />
        <span
          className="relative font-bold text-white dark:text-gray-900"
          style={{ fontSize: Math.max(14, size * 0.6) }}
        >
          P
        </span>
      </div>
      {!markOnly && (
        <span
          className="font-bold text-gray-900 dark:text-white"
          style={{ fontSize: Math.max(14, size * 0.6) }}
        >
          PathLink
        </span>
      )}
    </div>
  );
}
