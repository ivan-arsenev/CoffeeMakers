import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
const ProfileEducation = ({
  education: { school, degree, current, fieldofstudy, to, from, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
      {current && (
        <p>
          <i className='fas fa-check'></i>
          <strong> Current course</strong>
        </p>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
