import PropTypes from 'prop-types';
import {
  FeedbackOptionsContainer,
  FeedbackButton,
} from './StyledComponents/FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsContainer>
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackOptionsContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
