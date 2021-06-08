import React from 'react';

import { render, fireEvent } from '@testing-library/react';
// import { screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import AddMovieDialog from './AddMovieDialog';

describe('add movie functionality', () => {
  test('test dialog', () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const { getByTitle } = render(
      <AddMovieDialog open onAdd={onAdd} onClose={onClose} />
    );
    expect(getByTitle('title')).toBeTruthy();
    expect(getByTitle('release_date')).toBeTruthy();
    expect(getByTitle('poster_path')).toBeTruthy();
    expect(getByTitle('genres')).toBeTruthy();
    expect(getByTitle('overview')).toBeTruthy();
    expect(getByTitle('runtime')).toBeTruthy();
  });

  test('test reset button', () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const { getByText } = render(
      <AddMovieDialog open onAdd={onAdd} onClose={onClose} />
    );

    fireEvent.click(getByText('Reset'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  //   test('test submit button', async () => {
  //     const onClose = jest.fn();
  //     const onAdd = jest.fn();
  //     render(<AddMovieDialog open onAdd={onAdd} onClose={onClose} />);
  //     userEvent.type(screen.getByTitle('title'), 'Test movie');
  //     userEvent.type(screen.getByTitle('release_date'), '2006-04-21');
  //     userEvent.type(screen.getByTitle('poster_path'),
  //   'https://image.tmdb.org/t/p/w500/4Zz9cF8S4E7DITosNYh3spybYJb.jpg');
  //     userEvent.type(screen.getByTitle('genres'), ['Horror', 'Mystery', 'Action', 'Drama']);
  //     userEvent.type(screen.getByTitle('overview'), 'Overview');
  //     userEvent.type(screen.getByTitle('runtime'), 100);

  //     const button = await waitFor(() => screen.getByText('Submit'));
  //     userEvent.click(button);

  //     await waitFor(() =>
  //       expect(onAdd).toHaveBeenCalledWith(
  //         {
  //           title: 'Test movie',
  //           release_date: '2006-04-21',
  //           poster_path: 'https://image.tmdb.org/t/p/w500/4Zz9cF8S4E7DITosNYh3spybYJb.jpg',
  //           overview: 'Overview',
  //           genres: ['Horror', 'Mystery', 'Action', 'Drama'],
  //           runtime: 100,
  //         },
  //         expect.anything(),
  //       ),
  //     );
  //   });
});
