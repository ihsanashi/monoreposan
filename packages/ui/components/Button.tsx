import { ReactElement, useMemo } from 'react';

interface Props {
  label?: string;
  leftIcon?: ReactElement;
  isLoading?: boolean;
  rightIcon?: ReactElement;
  size?: 'x-small' | 'small' | 'large';
  variant?: 'ghost' | 'outline';
}

const getSizeClasses = (size: Props['size']) => {
  switch (size) {
    case 'x-small': {
      return 'px-2.5 py-2';
    }

    case 'small': {
      return 'px-4 py-2.5';
    }

    case 'large': {
      return 'px-6 py-3';
    }

    default: {
      return 'px-4 py-2.5';
    }
  }
};

const getVariantClasses = (variant: Props['variant']) => {
  switch (variant) {
    case 'ghost': {
      return 'bg-transparent border-0';
    }

    case 'outline': {
      return 'border';
    }

    default: {
      return '';
    }
  }
};

const BASE_BUTTON_CLASSES =
  'ui-cursor-pointer ui-leading-none ui-inline-flex ui-justify-center';

export const Button = (props: Props) => {
  const { size, label = 'Button', variant, ...rest } = props;

  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const variantClass = getVariantClasses(variant);

    return [sizeClass, variantClass];
  }, [size, variant]);

  return (
    <button
      type='button'
      role='button'
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...rest}
    >
      {label}
    </button>
  );
};
