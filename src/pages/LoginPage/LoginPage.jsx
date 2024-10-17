import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

/**
 * Page de login qui permet de selectionner un utilisateur.
 *
 * @returns {ReactElement} Un élément JSX qui affiche une liste de liens
 *                         vers les pages des utilisateurs.
 */
function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sélectionnez un utilisateur :</h2>
      <ul className={styles.userList}>
        <li>
          <Link to="/user/12" className={styles.link}>Karl</Link>
        </li>
        <li>
          <Link to="/user/18" className={styles.link}>Cécilia</Link>
        </li>
      </ul>
    </div>
  );
}

export default LoginPage;
