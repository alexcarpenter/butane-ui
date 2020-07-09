import * as React from 'react';
import cn from 'classnames';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

export const sizes = {
  sm: 'px-2 py-1 text-sm rounded-sm',
  md: 'px-4 py-2 rounded',
  lg: 'px-6 py-4 text-lg rounded',
}

export const variants = {
  primary: {
    enabled:
      'bg-blue-700 hover:bg-blue-800 border-blue-700 hover:border-blue-800',
    disabled: 'bg-blue-700 border-blue-700 opacity-50 cursor-not-allowed',
    outlined:
      'bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white border-blue-700 hover:border-transparent',
    outlinedDisabled:
      'bg-transparent text-blue-700 border-blue-700 opacity-50 cursor-not-allowed',
  },
  secondary: {
    enabled:
      'bg-green-700 hover:bg-green-800 border-green-700 hover:border-green-800',
    disabled: 'bg-green-700 border-green-700 opacity-50 cursor-not-allowed',
    outlined:
      'bg-transparent hover:bg-green-700 text-green-700 hover:text-white border-green-700 hover:border-transparent',
    outlinedDisabled:
      'bg-transparent text-green-700 border-green-700 opacity-50 cursor-not-allowed',
  },
  neutral: {
    enabled:
      'bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-800',
    disabled:
      'bg-gray-300 border-gray-300 opacity-50 cursor-not-allowed text-gray-800',
    outlined:
      'bg-transparent hover:bg-gray-700 text-gray-700 hover:text-white border-gray-700 hover:border-transparent',
    outlinedDisabled:
      'bg-transparent text-gray-700 border-gray-700 opacity-50 cursor-not-allowed',
  },
};

interface ButtonOwnProps {
  /**
   * Button size
   * Adjusts padding and font sizing
   * @default 'md'
   */
  size?: keyof typeof sizes;
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: keyof typeof variants;
  /**
   * Button outline
   * Creates an outlined version of the selected variant
   * @default false
   */
  outlined?: boolean;
  /**
   * Button full width
   * Makes button fill the avaible horizontal space
   * @default false
   */
  block?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
}

export type ButtonProps<
  E extends React.ElementType
  > = PolymorphicComponentProps<E, ButtonOwnProps>;

const defaultElement = 'button';

const Button = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      ref,
      size = 'md',
      variant = 'primary',
      outlined = false,
      block = false,
      disabled = false,
      ...props
    }: ButtonProps<E>,
    innerRef: typeof ref,
  ) => {
    return (
      <Box
        ref={innerRef}
        as={defaultElement}
        className={cn(
          'transition duration-300 ease-in-out text-white border inline-flex justify-center items-center flex-shrink-0 space-x-2 focus:outline-none focus:shadow-outline',
          sizes[size],
          {
            'w-full': block,
            [variants[variant].enabled]: !disabled && !outlined,
            [variants[variant].disabled]: disabled && !outlined,
            [variants[variant].outlined]: !disabled && outlined,
            [variants[variant].outlinedDisabled]: disabled && outlined,
          }
        )}
        disabled={disabled}
        {...props}
      />
    );
  },
) as <E extends React.ElementType = typeof defaultElement>(
    props: ButtonProps<E>,
  ) => JSX.Element;

export default Button;