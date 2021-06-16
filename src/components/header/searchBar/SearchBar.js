import React from 'react';

import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

import styles from './searchBar.module.scss';

const SearchBar = () => {
  const history = useHistory();

  const onSearchMovies = (query) => {
    history.push(`/movies?search=${query}`);
  };

  return (
    <div className={styles.searchBar}>
      <p className={styles.title}>find your movie</p>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={(fields) => {
          onSearchMovies(fields.query);
        }}
      >
        <Form>
          <Field type="search" variant="filled" color="secondary" id={styles.searchInput} name="query" />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
