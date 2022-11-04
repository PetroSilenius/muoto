import clsx from 'clsx';
import React from 'react';

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: 'default' | 'orange' | 'blue' | 'light' | 'red' | 'dark';
}) => {
  return (
    <div
      className={clsx('rounded-full px-1.5 shadow-[0_0_1px_4px_black]', {
        'bg-zinc-800 text-zinc-500': color === 'default',
        'bg-muoto-orange text-orange-100': color === 'orange',
        'bg-muoto-blue text-blue-100': color === 'blue',
        'bg-muoto-red text-red-100': color === 'red',
        'text-light-100 bg-muoto-light': color === 'light',
        'bg-muoto-dark text-orange-100': color === 'dark',
        'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
      })}
    >
      {children}
    </div>
  );
};
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'orange' | 'blue' | 'light' | 'red' | 'dark';
  animateRerendering?: boolean;
}) => {
  return (
    <div
      className={clsx('relative rounded-xl border border-dashed', {
        'p-5': size === 'small',
        'p-9': size === 'default',
        'border-zinc-700': color === 'default',
        'border-muoto-orange': color === 'orange',
        'border-muoto-blue': color === 'blue',
        'border-muoto-red': color === 'red',
        'border-muoto-light': color === 'light',
        'border-muoto-dark': color === 'dark',
        'animate-[rerender_1s_ease-in-out_1] text-muoto-orange':
          animateRerendering,
      })}
    >
      <div
        className={clsx(
          'absolute -top-2.5 flex space-x-1 text-[9px] uppercase leading-4 tracking-widest',
          {
            'left-5': size === 'small',
            'left-9': size === 'default',
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};
