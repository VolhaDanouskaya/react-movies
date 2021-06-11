import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageNotFound from './PageNotFound';

describe('test pagenotfound component', () => {
  test('whole pagenotfound should match snapshot', () => {
    const { asFragment } = render(
      <Router>
        <PageNotFound />
      </Router>
    );
    expect(
      asFragment(
        <Router>
          <PageNotFound />
        </Router>
      )
    ).toMatchSnapshot();
  });

  test('test pagenotfound link to home page with snapshot', () => {
    const { getByTitle } = render(
      <Router>
        <PageNotFound />
      </Router>
    );
    const linkText = getByTitle('linkToHome');
    expect(linkText).toMatchInlineSnapshot(`
      <a
        class="home-link"
        href="/movies"
        title="linkToHome"
      >
        Go Back To Home
      </a>
    `);
  });
});
