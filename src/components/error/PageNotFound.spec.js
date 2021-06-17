import React from 'react';

import { render } from '@testing-library/react';

import PageNotFound from './PageNotFound';

describe('test pagenotfound component', () => {
  test('whole pagenotfound should match snapshot', () => {
    const { asFragment } = render(<PageNotFound />);
    expect(asFragment(<PageNotFound />)).toMatchSnapshot();
  });
});
