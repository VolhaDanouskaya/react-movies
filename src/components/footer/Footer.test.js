import React from 'react';

import renderer from 'react-test-renderer';

import Footer from './Footer';

test('test link to home', () => {
  const page = renderer.create(<Footer />).toJSON;
  expect(page).toMatchSnapshot();
});
