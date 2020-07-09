import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './';

export default {
  title: 'Button',
  parameters: {
    info: { inline: true },
  },
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;