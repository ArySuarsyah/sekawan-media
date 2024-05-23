/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const FormikValidation = ({ initialValues, validationSchema, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formikProps => children(formikProps)}
    </Formik>
  );
};
FormikValidation.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.any
};

export default FormikValidation;

