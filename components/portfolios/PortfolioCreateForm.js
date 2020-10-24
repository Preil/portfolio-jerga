import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const validateInputs = (validate) => {
  let errors = {};
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }
  return errors;
}

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
}

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({isSubmitting}) => (
        <Form>
          <div>
            <label>Title </label>
            <Field type="text" name="title"/>
            <ErrorMessage name="title" component="div"/>
          </div>


          <div>
            <label>Company </label>
            <Field type="text" name="company"/>
            <ErrorMessage name="company" component="div"/>
          </div>

          <div>
            <label>Position </label>
            <Field type="text" name="position"/>
            <ErrorMessage name="position" component="div"/>
          </div>

          <div>
            <label>Description </label>
            <Field type="textarea" name="description" component="textarea"/>
            <ErrorMessage name="description" component="div"/>
          </div>

          <div>
            <label>Start date </label>
            <Field type="text" name="startDate"/>
            <ErrorMessage name="startDate" component="div"/>
          </div>

          <div>
            <label>End date </label>
            <Field type="text" name="endDate"/>
            <ErrorMessage name="endDate" component="div"/>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;


// import React from 'react'
//
// export default class PortfolioCreateForm extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {title: '', description: '', language: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     const field = event.target.name;
//     this.setState({
//       [field]: event.target.value
//     })
//   }
//
//   handleSubmit(event) {
//     alert('Title: ' + this.state.title +'\n' +
//       'Description: ' + this.state.description + '\n' +
//       'Language: ' + this.state.language);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
//         </label>
//
//         <label>
//           Name:
//           <textarea name="description"  value={this.state.description} onChange={this.handleChange}/>
//         </label>
//
//         <label>
//           Pick your favorite Programming Language:
//           <select name="language" value={this.state.language} onChange={this.handleChange}>
//             <option value="Java">Java</option>
//             <option value="Javascript">Javascript</option>
//             <option value="C++">C++</option>
//             <option value="C#">C#</option>
//           </select>
//         </label>
//
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }