
import React from 'react';
import PropTypes from 'prop-types';
import UsersNavBar from '../components/UsersNavBar';
import Container from './Container';

const Page = (props) => (
  <div>
    <UsersNavBar label="Validate Sign Up Email" screen="user/signupvalidateemail" />
    <Container emailToken={props.params.token} />
  </div>
);

Page.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Page;
