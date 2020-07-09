import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>
}

export default Button;