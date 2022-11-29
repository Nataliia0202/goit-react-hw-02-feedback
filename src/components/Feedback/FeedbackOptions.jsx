import PropTypes from 'prop-types';
// import css from './FeedbackOptions.module.css';
import { FeedbackOptionsList, FeedBackButton } from 'components/Feedback/FeedbackOptions.styled'



export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsList>
    {options.map((option, index) => (
      <FeedBackButton
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedBackButton>
    ))}
  </FeedbackOptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
