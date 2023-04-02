import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const boxVariants = cva('ui-w-full ui-block');

export interface BoxProps
  extends HTMLDivElement,
    VariantProps<typeof boxVariants> {
  className?: string;
  children?: ReactNode;
}

export function Box({ className, children, ...props }: BoxProps) {
  return (
    <div className={twMerge(boxVariants({ className }))} {...props}>
      {children}
    </div>
  );
}
