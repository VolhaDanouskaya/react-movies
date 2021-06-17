import React from 'react';

import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';

import styles from './searchBar.module.scss';

const SearchBar = () => {
  const router = useRouter();
  const onSearchMovies = (query) => {
    router.push(`/movies?search=${query}`);
  };

  return (
    <div className={styles['search-bar']}>
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
          <Field
            type="search"
            variant="filled"
            color="secondary"
            id={styles['search-input']}
            name="query"
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
