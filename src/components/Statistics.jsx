import PropTypes from 'prop-types';
import { StatisticsList } from './StyledComponents/Statistics.styled';
function Statistics({ options }) {
  return (
    <StatisticsList>
      {Object.keys(options).map(option => (
        <li key={option}>
          <p>
            {option}: {options[option]}
          </p>
        </li>
      ))}
    </StatisticsList>
  );
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentaga: PropTypes.string.isRequired,
  }).isRequired,
};

export default Statistics;
