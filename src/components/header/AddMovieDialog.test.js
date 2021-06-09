import React from 'react';

import 'regenerator-runtime/runtime';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
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
    render(<AddMovieDialog open onAdd={onAdd} onClose={onClose} />);

    userEvent.click(screen.getByText('Submit'));

    expect(onAdd).toHaveBeenCalledTimes(1);
  });
});
