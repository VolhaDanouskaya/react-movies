import { storyMovie } from '../../../../../test/mocks';

import MovieCard from './MovieCard';

export default {
  title: 'MovieCard',
  component: MovieCard,
  argTypes: { updateMovie: { action: 'update movie' }, deleteMovie: { action: 'delete movie' } },
  decorators: [
    (Story) => (
      <div style={{ listStyleType: 'none', color: '#a9a9a9', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <MovieCard {...args} />;
export const MoviePage = Template.bind({});

MoviePage.args = { movie: storyMovie };
