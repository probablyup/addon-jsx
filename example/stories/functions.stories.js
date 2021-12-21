import React from 'react';
import { storiesOf } from '@storybook/react';

class Simple extends React.Component {
  render() {
    return (
      <div>
        {typeof this.props.children === 'function'
          ? this.props.children()
          : this.props.children}
      </div>
    );
  }
}
const withErrors = (BaseComponent) => (props) => {
  const style = { color: 'red' };
  return <BaseComponent {...props} style={style} />;
};

const SimpleWithErrors = withErrors(Simple);

storiesOf('Function as a children', module)
  .add('No options', () => <Simple>{() => <span>World</span>}</Simple>)
  .add('Skip', () => <Simple>{() => <span>World</span>}</Simple>, {
    jsx: { skip: 1 },
  })
  .add('Skip and Rename', () => <Simple>{() => <span>World</span>}</Simple>, {
    jsx: { skip: 1, displayName: () => 'Renamed' },
  })
  .add('Deep function - No options', () => (
    <Simple>
      {() => (
        <SimpleWithErrors>
          <span>World</span>
        </SimpleWithErrors>
      )}
    </Simple>
  ))
  .add(
    'Deep function - Skip',
    () => (
      <Simple>
        {() => (
          <SimpleWithErrors>
            <span>World</span>
          </SimpleWithErrors>
        )}
      </Simple>
    ),
    { jsx: { skip: 2 } }
  );
