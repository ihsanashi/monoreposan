import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';

const boxVariants = cva('w-full block');

type BaseProps = ComponentProps<'div'>;

export interface BoxProps extends BaseProps, VariantProps<typeof boxVariants> {
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

Box.displayName = 'Box';
