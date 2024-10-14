import styles from './styles.module.scss';
import PropTypes from 'prop-types';

/**
 * Displays the user's information.
 *
 * @param {Object} props
 * @param {Object} props.user the user's data object
 * @returns {ReactElement}
 */
const UserInfo = ({ user }) => {
  return (
    user && (
      <div className={styles.userInfo}>
        <h1>Bonjour, {user.firstName}</h1>
        <p>Nom : {user.lastName}</p>
        <p>Âge : {user.age} ans</p>
        <p>Score du jour : {user.todayScore * 100}%</p>
      </div>
    )
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    todayScore: PropTypes.number,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      proteinCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
    }),
  }),
};

export default UserInfo;
