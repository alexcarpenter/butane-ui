
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './';
import { sizes, variants } from './Button';

describe('<Button />', () => {
  test('button variants', () => {
    const { getByText } = render(<Button variant="primary">Button text</Button>);
    const button = getByText(/button text/i);
    expect(button).toHaveClass(variants['primary'].enabled);
  });

  test('button outlined', () => {
    const { getByText } = render(<Button outlined>Button text</Button>);
    const button = getByText(/button text/i);
    expect(button).toHaveClass(variants['primary'].outlined);
  });

  test('button sizes', () => {
    const { getByText } = render(<Button size="lg">Button text</Button>);
    const button = getByText(/button text/i);
    expect(button).toHaveClass(sizes['lg']);
  });

  test('disabled button', () => {
    const { getByText } = render(<Button disabled>Button text</Button>);
    const button = getByText(/button text/i);
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveClass(variants['primary'].disabled);
    expect(button).not.toHaveClass(variants['primary'].enabled);
  });

  test('click functionality', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button onClick={mockFn}>Button text</Button>);
    fireEvent.click(getByText(/button text/i));
    expect(mockFn).toHaveBeenCalled();
  });
})