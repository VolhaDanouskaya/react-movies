import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';

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

  test('test submit action is invoked', async () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();

    const { getByTestId, getAllByRole } = render(
      <AddMovieDialog open onAdd={onAdd} onClose={onClose} />
    );

    await waitFor(() => {
      fireEvent.change(getByTestId('title'), {
        target: { value: 'Test movie' },
      });
    });

    await waitFor(() => {
      fireEvent.change(getByTestId('release_date'), {
        target: { value: '2006-04-21' },
      });
    });

    await waitFor(() => {
      fireEvent.change(getByTestId('poster_path'), {
        target: {
          value:
            'https://image.tmdb.org/t/p/w500/4Zz9cF8S4E7DITosNYh3spybYJb.jpg',
        },
      });
    });

    fireEvent.mouseDown(getAllByRole('button')[1]);
    getAllByRole('option')[1].click();

    await waitFor(() => {
      fireEvent.change(getByTestId('overview'), {
        target: { value: 'Overview' },
      });
    });

    await waitFor(() => {
      fireEvent.change(getByTestId('runtime'), {
        target: { value: 120 },
      });
    });

    await waitFor(() => {
      fireEvent.click(getByTestId('submit'));
    });

    expect(onAdd).toHaveBeenCalledWith({
      title: 'Test movie',
      release_date: '2006-04-21',
      poster_path:
        'https://image.tmdb.org/t/p/w500/4Zz9cF8S4E7DITosNYh3spybYJb.jpg',
      genres: ['Adventure'],
      overview: 'Overview',
      runtime: 120,
    });
  });

  test('test empty modal with errors', async () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();

    const { getByTestId, getByText } = render(
      <AddMovieDialog open onAdd={onAdd} onClose={onClose} />
    );

    await waitFor(() => {
      fireEvent.click(getByTestId('submit'));
    });
    expect(getByText('Title is required')).toBeTruthy();
    expect(getByText('Poster url is required')).toBeTruthy();
    expect(getByText('genres field must have at least 1 items')).toBeTruthy();
    expect(getByText('Overview is required')).toBeTruthy();
    expect(getByText('Runtime is required')).toBeTruthy();
  });
});
