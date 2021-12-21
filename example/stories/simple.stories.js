import React from 'react';
import { storiesOf } from '@storybook/react';

const Simple = ({ children }) => (
  <div>
    <span>Hello</span>
    {children}
  </div>
);

storiesOf('Simple Test', module)
  .add('No children - No options', () => <Simple />)
  .add('No children - Rename', () => <Simple />, {
    jsx: { displayName: 'Renamed' },
  })
  .add('With children - No options', () => (
    <Simple>
      <span>World</span>
    </Simple>
  ))
  .add(
    'With children - Skip',
    () => (
      <Simple>
        <span>World</span>
      </Simple>
    ),
    { jsx: { skip: 1 } }
  )
  .add(
    'With children - Skip and rename',
    () => (
      <Simple>
        <span>World</span>
      </Simple>
    ),
    { jsx: { skip: 1, displayName: 'Renamed' } }
  )
  .add('Data strings', () => (
    <div data={`{"bar"}`} data-baz={`{"baz"}`} data-bat={`{"bat"}`} />
  ));
