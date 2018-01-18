import React, { Component } from 'react';
import { TextField } from 'material-ui';
import $ from 'jquery';
import Alert from 'react-s-alert';
import { Icon } from './profile';
import _ from 'lodash';


class Contact extends Component {
  state = {}

  onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onFocus = (ev) => {
    this.setState({ error: '' });
  }

  submit = () => {
    if (this.state.submitted) return;

    const { name, _replyto, message } = this.state;

    if(!name || !_replyto || !message) {
      this.setState({ error: 'Please enter a Name, Email and Message.' });
      return;
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_replyto)) {
      this.setState({ error: 'Please enter a valid Email' });
      return;
    }

    $.ajax({
      url: 'https://formspree.io/gkaragkiaouris2@gmail.com',
      method: 'POST',
      data: _.omit(this.state, 'error'),
      dataType: 'json',
      success: this.success,
    });
  }

  success = () => {
    Alert.success('Message sent! I will contact you shortly. Thanks!');
    this.setState({ submitted: true });
  }

  render() {
    const { name, _replyto, _subject, message, _gotcha, submitted, error } = this.state;

    return (
      <section className='contact'>
        <div className='anchor' id='contact' />
        <h1 className='section-title'>Contact</h1>
        <div className='content'>
          <div className={`contact-form flip-container${submitted ? ' flipped' : ''}`}>
            <div className='flipper'>
              <div className='front card'>
                <TextField className='contact-field' name='name' floatingLabelText='Name' value={name} onChange={this.onChange} onFocus={this.onFocus} />
                <TextField className='contact-field' name='_replyto' type='email' floatingLabelText='Email' value={_replyto} onChange={this.onChange} onFocus={this.onFocus} />
                <TextField className='contact-field' name='_subject' floatingLabelText='Subject' value={_subject} onChange={this.onChange} />
                <TextField className='contact-field' name='message' floatingLabelText='Message' value={message} onChange={this.onChange} multiLine={true} rows={3} rowsMax={3} onFocus={this.onFocus} />

                <input name='_gotcha' style={{ display: 'none' }} value={_gotcha} onChange={this.onChange} />
                <div className='card-footer'>
                  <span>{ error }</span>
                  <a onClick={this.submit}> Send </a>
                </div>
              </div>
              <div className='back card'>
                <Icon code='check fa-3x' />
                <h3>Thank you!</h3>
              </div>
            </div>
          </div>
          <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.9482356940675!2d-72.89622117565575!3d41.418642337403305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7cffe1977d751%3A0x7fd9f664a07b3eaf!2s275+Mt+Carmel+Ave%2C+Hamden%2C+CT+06518!5e0!3m2!1sen!2sus!4v1512689783666" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
