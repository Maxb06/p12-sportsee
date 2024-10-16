import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

/**
 * Represents an error component displaying a 404 message.
 */
const Error = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>404</p>
      <p className={styles.container__subtitle}>
        Page not found
      </p>
      <Link to={'/'} className={styles.container__link}>
        Retourner sur la page accueil
      </Link>
    </div>
  );
};

export default Error;