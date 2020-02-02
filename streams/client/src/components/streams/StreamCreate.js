import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  // renderInput(formProps) {

    renderInput({ input }) {
      console.log(input);
  //  return <input onChange={formProps.input.onChange} value={formProps.input.value}/>;
      return <input {...input}/>
  }

  render() {
      console.log(this.props);
      return (
        <form>
          <Field name="title" component={this.renderInput}/>
          <Field name="description" component={this.renderInput}/>
        </form>
      );
  };
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
