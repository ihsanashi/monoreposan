import { twMerge } from 'tailwind-merge';
import { ReactNode, ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const flexVariants = cva('flex', {
  variants: {
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    basis: {
      0: 'basis-0',
      1: 'basis-1',
      auto: 'basis-auto',
      px: 'basis-px',
      full: 'basis-full',
    },
    direction: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',
      column: 'flex-col',
      columnReverse: 'flex-col-reverse',
    },
    grow: {
      0: 'grow-0',
      1: 'grow',
    },
    justify: {
      normal: 'justify-normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
    shrink: {
      0: 'shrink-0',
      1: 'shrink',
    },
    wrap: {
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
      nowrap: 'flex-nowrap',
    },
  },
});

type BaseProps = ComponentProps<'div'>;

interface FlexProps extends BaseProps, VariantProps<typeof flexVariants> {
  className?: string;
  children?: ReactNode;
}

export function Flex({
  className,
  children,
  align,
  basis,
  direction,
  grow,
  justify,
  shrink,
  wrap,
  ...props
}: FlexProps) {
  return (
    <div
      className={twMerge(
        flexVariants({
          className,
          align,
          basis,
          direction,
          grow,
          justify,
          shrink,
          wrap,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Flex.displayName = 'Flex';
