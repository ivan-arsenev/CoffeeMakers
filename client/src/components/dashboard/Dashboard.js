import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';
import Experience from './Experience';
import Education from './Education';

// component with jsx and destructored props in params, not only data alse functions that comes from actions
const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' />
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Education education={profile.education} />
          <Experience experience={profile.experience} />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

// types of props that this component will use from redux state
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

// in Dashboard component we need only auth and profile object => but in profile reducer we store more then that
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
