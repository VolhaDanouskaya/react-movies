import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddMovieDialog from './AddMovieDialog';

describe('add movie functionality', () => {
  test('test dialog', () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const { getByTitle } = render(<AddMovieDialog open onAdd={onAdd} onClose={onClose} />);
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
    const { getByText } = render(<AddMovieDialog open onAdd={onAdd} onClose={onClose} />);

    fireEvent.click(getByText('Reset'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('test submit action is invoked', () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();
    const { getByTestId, debug } = render(<AddMovieDialog open onAdd={onAdd} onClose={onClose} />);
    fireEvent.change(getByTestId('title'), {
      target: { value: 'Test movie' },
    });
    fireEvent.change(getByTestId('release_date'), {
      target: { value: '2006-04-21' },
    });
    fireEvent.change(getByTestId('poster_path'), {
      target: { value: 'https://image.tmdb.org/t/p/w500/4Zz9cF8S4E7DITosNYh3spybYJb.jpg' },
    });
    fireEvent.change(getByTestId('genres').querySelector('input'), {
      target: { value: 'Horror' },
    });
    fireEvent.change(getByTestId('overview'), {
      target: { value: 'Overview' },
    });
    fireEvent.change(getByTestId('runtime'), {
      target: { value: 120 },
    });

    fireEvent.click(getByTestId('submit'));
    debug();

    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  // test('test change genres', () => {
  //   const onClose = jest.fn();
  //   const onAdd = jest.fn();
  //   render(<AddMovieDialog open onAdd={onAdd} onClose={onClose} />);

  //   fireEvent.click(screen.getByTestId('select').querySelector('input'), {
  //     target: { value: ['Action', 'Drama'] },
  //   });

  //   console.log(screen.getByTestId('select'));
  //   // expect(screen.getByTestId('select').val()).toBe('Action');
  //   expect(screen.findByText('Action')).toBeTruthy();
  //   expect(screen.findByText('Drama')).toBeTruthy();
  // });
});
