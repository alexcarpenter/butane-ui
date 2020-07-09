import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './';

export default {
  title: 'Button'
};

export const Primary = () => <Button onClick={action('clicked')}>Primary Button</Button>;
export const Secondary = () => <Button variant="secondary" onClick={action('clicked')}>Secondary Button</Button>;
export const Neutral = () => <Button variant="neutral" onClick={action('clicked')}>Neutral Button</Button>;
export const Disabled = () => <Button disabled onClick={action('clicked')}>Disabled Button</Button>;
export const Outlined = () => <Button outlined onClick={action('clicked')}>Outlined Button</Button>;
export const Link = () => <Button as="a" href="#" onClick={action('clicked')}>Link Button</Button>;