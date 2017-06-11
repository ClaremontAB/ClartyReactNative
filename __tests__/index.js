import 'react-native';
import React from 'react';
import ClartyReactNative from '../app/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  jest.mock('WebView', () => 'WebView')

  const tree = renderer.create(
    <ClartyReactNative />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
