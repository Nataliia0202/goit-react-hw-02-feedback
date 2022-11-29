import PropTypes from 'prop-types';
import { MessageRed } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => (
  <MessageRed >{message}</MessageRed>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
