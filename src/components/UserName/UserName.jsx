import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Displays a greeting message with the given name.
 * @param {Object} props
 * @param {string} props.name The user's name.
 * @returns {ReactElement}
 */
function UserName({ name }) {
  return (
    <div className={styles.userName}>
      <h1>Bonjour <span>{name}</span> !</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserName;
