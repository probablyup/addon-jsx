import React from 'react';
import { storiesOf } from '@storybook/react';

const Deep = ({ children }) => (
  <div>
    <div>
      <div>
        <div>
          <span>Hello</span>
          {children ? children : null}
        </div>
      </div>
    </div>
  </div>
);

storiesOf('Deep Test', module)
  .add('No children - No options', () => (
    <div>
      <div>
        <ul>
          <li>Deeper</li>
        </ul>
        <div>
          <div>
            <span>Hello</span>
            <Deep />
          </div>
        </div>
      </div>
    </div>
  ))
  .add(
    'No children - Rename',
    () => (
      <div>
        <div>
          <div>
            <div>
              <span>Hello</span>
              <Deep />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      jsx: { displayName: () => 'Renamed' },
    }
  )
  .add('With children - No options', () => (
    <div>
      <div>
        <div>
          <div>
            <span>Hello</span>
            <Deep />
          </div>
        </div>
      </div>
    </div>
  ))
  .add(
    'With children - Skip',
    () => (
      <div>
        <div>
          <div>
            <div>
              <span>Hello</span>
              <Deep />
            </div>
          </div>
        </div>
      </div>
    ),
    { jsx: { skip: 1 } }
  )
  .add(
    'With children - Skip and rename',
    () => (
      <div>
        <div>
          <ul>
            <li>Deeper</li>
          </ul>
          <div>
            <div>
              <span>Hello</span>
              <Deep />
            </div>
          </div>
        </div>
      </div>
    ),
    { jsx: { skip: 1, displayName: () => 'Renamed' } }
  );
