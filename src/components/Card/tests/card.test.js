import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../index';

describe('Card', () => {
  it('renders successfully with the required props', () => {
    const tree = renderer.create(<Card>Test</Card>);
    expect(tree).toMatchSnapshot();
  });
});
