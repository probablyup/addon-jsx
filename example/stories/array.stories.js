import React from 'react';
import { storiesOf } from '@storybook/react';

const Component = () => <div id="from-function" />;
const Simple = (props) => (
  <div>
    <span>Hello</span>
    {props.children}
  </div>
);

storiesOf('Children Array', module)
  .add(
    'Simple Array',
    () => (
      <div>
        <div />
        <div />
      </div>
    ),
    { jsx: { skip: 1 } }
  )
  .add(
    'Array with function',
    () => (
      <div>
        <div />
        <div />
        {Component()}
      </div>
    ),
    { jsx: { skip: 1 } }
  )
  .add(
    'Array with nested component',
    () => (
      <div>
        <div />
        <Simple>
          <span>hello</span>
        </Simple>
      </div>
    ),
    { jsx: { skip: 1 } }
  );
