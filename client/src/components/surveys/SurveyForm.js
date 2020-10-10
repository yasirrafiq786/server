import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';

const FIELDS = [
  {label: 'Survey Title', name: 'title'},
  {label: 'Subject Line', name: 'subject'},
  {label: 'Email Body', name: 'body'},
  {label: 'Recipients List', name: 'emails'},
];

class SurveyForm extends Component {
  renderField() {
    FIELDS.map;
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderField()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
