import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
const Profiles = ({ getProfiles, profile: { profile, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return <div></div>;
};

Profile.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
