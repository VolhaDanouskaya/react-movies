import React from 'react';

import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import './searchBar.scss';

const SearchBar = ({ onSearch }) => (
  <div className="search-bar">
    <p className="title">find your movie</p>
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={(fields) => {
        onSearch(fields.query);
      }}
    >
      <Form>
        <Field
          label="What do you want to search?"
          type="search"
          variant="filled"
          color="secondary"
          id="search-input"
          name="query"
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Form>
    </Formik>
  </div>
);

export default SearchBar;
