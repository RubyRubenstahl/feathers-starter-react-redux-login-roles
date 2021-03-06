
import React from 'react';
import PropTypes from 'prop-types';
import UsersNavBar from '../components/UsersNavBar';
import FormContainer from './FormContainer.js';

const Page = (props) => (
  <div>
    <UsersNavBar label="Reset Password" screen="user/forgotpwdreset" />
    <FormContainer resetToken={props.params.token} />
  </div>
);

Page.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Page;
