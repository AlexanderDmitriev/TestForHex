import React from 'react';
import { Field, reduxForm } from 'redux-form';

let KitchenForm = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{/* form body*/}</form>;
};

KitchenForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(KitchenForm);


export default KitchenForm;
