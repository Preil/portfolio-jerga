import React from 'react'

export default class PortfolioCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', description: '', language: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event) {
    alert('Title: ' + this.state.title +'\n' +
      'Description: ' + this.state.description + '\n' +
      'Language: ' + this.state.language);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
        </label>

        <label>
          Name:
          <textarea name="description"  value={this.state.description} onChange={this.handleChange}/>
        </label>

        <label>
          Pick your favorite Programming Language:
          <select name="language" value={this.state.language} onChange={this.handleChange}>
            <option value="Java">Java</option>
            <option value="Javascript">Javascript</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}