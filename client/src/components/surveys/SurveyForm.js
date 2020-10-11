import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';

const FIELDS = [
  {label: 'Survey Title', name: 'title'},
  {label: 'Subject Line', name: 'subject'},
  {label: 'Email Body', name: 'body'},
  {label: 'Recipients List', name: 'emails'},
];

class SurveyForm extends Component {
  renderField() {
    return _.map(FIELDS, ({name, label}) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          text="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderField()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({name}) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
