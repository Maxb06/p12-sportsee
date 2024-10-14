import styles from './styles.module.scss';
import logo from '../../assets/logo.png';

/**
 * Component which displays the navigation bar
 * 
 * @returns {ReactElement} The component
 */
const NavHorizontal = () => {
    return (
        <div className={styles.header}>
            <img
                src={logo}
                alt="SportSee"
                className={styles.header__logo}
            />
            <nav className={styles.header__nav}>
                <ul className={styles.header__nav__list}>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">Profil</a>
                    </li>
                    <li>
                        <a href="#">Réglages</a>
                    </li>
                    <li>
                        <a href="#">Communauté</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavHorizontal;