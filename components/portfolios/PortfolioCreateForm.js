import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Button, Alert} from 'reactstrap';
import PortImport from "../form/PortInput";
import PortDate from "../form/PortDate";
import moment from 'moment'



const validateInputs = (values) => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if(!values[key] && key!=='endDate') {
      errors[key] = `Field ${key} is Required!`
    }
  })

  const startDate = values.startDate;
  const endDate = values.endDate;


  if(startDate && endDate && moment(endDate).isBefore(startDate)) {
    errors.endDate = 'End Date cannot be before Start Date !!!'
  }

  return errors;
}



const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <Form>

          <Field type="text"
                 name="title"
                 label="Title"
                 component={PortImport}/>

          <Field type="text"
                 name="company"
                 label="Company"
                 component={PortImport}/>

          <Field type="text"
                 name="location"
                 label="Location"
                 component={PortImport}/>

          <Field type="text"
                 name="position"
                 label="Position"
                 component={PortImport}/>

          <Field type="textarea"
                 name="description"
                 label="Description"
                 component={PortImport}/>

          <Field
                 name="startDate"
                 label="Start Date"
                 initialDate={initialValues.startDate}
                 component={PortDate}/>

          <Field canBeDisabled={true}
                 name="endDate"
                 label="End Date"
                 initialDate={initialValues.endDate}
                 component={PortDate}/>

          { error &&
            <Alert color="danger">
              {error}
            </Alert>
          }

          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
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