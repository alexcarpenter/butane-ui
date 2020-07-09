import * as React from 'react';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

interface ButtonOwnProps {
  children: React.ReactNode;
}

export type ButtonProps<
  E extends React.ElementType
  > = PolymorphicComponentProps<E, ButtonOwnProps>;

const defaultElement = 'button';

const Button = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { ref, ...props }: ButtonProps<E>,
    innerRef: typeof ref,
  ) => {
    return (
      <Box
        ref={innerRef}
        as={defaultElement}
        {...props}
      />
    );
  },
) as <E extends React.ElementType = typeof defaultElement>(
    props: ButtonProps<E>,
  ) => JSX.Element;

export default Button;