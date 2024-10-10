// src/components/Button.tsx

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="btn btn-hover focus:ring-4 focus:ring-primary-dark focus:ring-opacity-50"
    >
      {text}
    </Link>
  );
};