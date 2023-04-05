import { twMerge } from 'tailwind-merge';
import { ReactNode, ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const containerVariants = cva('container', {
  variants: {
    centerContent: {
      true: 'mx-auto',
    },
  },
  defaultVariants: {
    centerContent: false,
  },
});

type BaseProps = ComponentProps<'div'>;

interface ContainerProps
  extends BaseProps,
    VariantProps<typeof containerVariants> {
  className?: string;
  children?: ReactNode;
  centerContent?: boolean;
}

export function Container({
  className,
  children,
  centerContent,
  ...props
}: ContainerProps) {
  return (
    <div
      className={twMerge(containerVariants({ className, centerContent }))}
      {...props}
    >
      {children}
    </div>
  );
}

Container.displayName = 'Container';
