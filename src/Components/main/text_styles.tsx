import React from 'react';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type TextWeight = 'normal' | 'semibold' | 'bold';

interface TextComponentProps {
  text: string;
  size: TextSize;
  weight?: TextWeight;
}

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

const weightClasses: Record<TextWeight, string> = {
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const TextComponent: React.FC<TextComponentProps> = ({ text, size, weight = 'normal' }) => {
  const sizeClass = sizeClasses[size];
  const weightClass = weightClasses[weight];

  return <p className={`${sizeClass} ${weightClass} font-jakarta-sans`}>{text}</p>;
};

export default TextComponent;