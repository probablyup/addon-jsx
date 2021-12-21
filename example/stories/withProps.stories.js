import React from 'react';
import { storiesOf } from '@storybook/react';

import Simple from '../components/simple';

storiesOf('With Props', module)
  .add('No children - No options', () => <Simple />)
  .add('No children - Rename', () => <Simple test="test" value={true} />, {
    displayName: 'Renamed',
  })
  .add('With children - No options', () => (
    <Simple test="test" value={true}>
      <span>World</span>
    </Simple>
  ))
  .add(
    'With children - Skip',
    () => (
      <Simple>
        <Simple test="test" value={true}>
          <div />
        </Simple>
      </Simple>
    ),
    { jsx: { skip: 1 } }
  )
  .add(
    'With children - Skip and rename',
    () => (
      <Simple>
        <Simple test="test" value={true}>
          <span>World</span>
        </Simple>
      </Simple>
    ),
    { jsx: { skip: 1, displayName: () => 'Renamed' } }
  )
  .add(
    'With dangerouslySetInnerHTML - onBeforeRender',
    () => (
      <Simple>
        <Simple test="test" value={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: '<div>Inner HTML<ul><li>1</li><li>2</li></ul></div>',
            }}
          />
        </Simple>
      </Simple>
    ),
    {
      jsx: {
        skip: 1,
        onBeforeRender: (domString) => {
          if (domString.search('dangerouslySetInnerHTML') < 0) {
            return '';
          }
          try {
            domString = /(dangerouslySetInnerHTML={{)([^}}]*)/.exec(
              domString
            )[2];
            domString = /(')([^']*)/.exec(domString)[2];
          } catch (err) {}
          return domString;
        },
      },
    }
  );
