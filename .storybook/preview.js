import '../src/components/body/body.scss';
import '../src/components/body/movieList/movies.scss';
import '../src/components/error/error.scss';
import '../src/components/footer/footer.scss';
import '../src/components/header/header.scss';
import '../src/components/header/movieDetails/movieDetails.scss';
import '../src/components/header/searchBar/searchBar.scss';
import '../src/components/layout/layout.scss';
import '../src/stories/MovieCard.stories.css';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
