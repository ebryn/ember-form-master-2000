import Ember from 'ember';

export default Ember.Service.extend({
  widgetBasePath: 'fm-widgets/',
  displayBasePath: 'fm-displays/',
  submitButtonClass: 'btn btn-primary',
  errorClass: 'has-error',
  wrapperClass: 'form-group',
  labelClass: 'control-label',
  inputClass: 'form-control',
  textareaClass: 'form-control',
  selectClass: 'form-control',
  formClass: 'form-vertical',
  checkboxWrapperClass: 'form-group',
  focusClass: 'is-focused',
  radioClass: 'radio',
  helptextClass: 'help-block',
  errortextClass: 'help-block',
  isValidClass: 'is-valid',

  /*
  *   If true, always show validation errors. If false, wait until some sort of
  *   user interaction on each field before showing errors.
  */
  showErrorsByDefault: true
});
