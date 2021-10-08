import './App.css';
import React from 'react';
import { useFormik } from 'formik';

const App = () => {

  const validate = values =>{
    const errors = {};

    if(!values.firstName){
      errors.firstName = 'Required'
    }

      if(!values.lastName){
      errors.lastName = 'Required'
    }

    if(!values.password){
      errors.password = 'Required'
    }

    if(!values.confrimPassword){
      errors.confrimPassword = 'Required'
    }else if(values.confrimPassword !== values.password){
      errors.confrimPassword = 'Must be the same password '
    }

    return errors;
  }

  const clean = values =>{
    const cleans = {}
  
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      confrimPassword: '',
      gender: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    clean,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName ? <a>{formik.errors.firstName}</a>: null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastName && formik.errors.lastName ? <a>{formik.errors.lastName}</a>: null}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? <a>{formik.errors.password}</a>: null}
      <label htmlFor="confrimPassword">Confrim Password</label>
      <input
        id="confrimPassword"
        name="confrimPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confrimPassword}
        onBlur={formik.handleBlur}
      />
      {formik.touched.confrimPassword && formik.errors.confrimPassword ? <a>{formik.errors.confrimPassword}</a>: null}
      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        name="gender"
        onChange={formik.handleChange}
        value={formik.values.gender}
        onBlur={formik.handleBlur}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="clean">Clean</button>
      <button type="submit">Submit</button>
    </form>
  );
};
export default App;
