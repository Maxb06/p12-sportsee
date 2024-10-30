import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import NavHorizontal from '../components/NavHorizontal/NavHorizontal';
import NavVertical from '../components/NavVertical/NavVertical';
import styles from './styles.module.scss';


/**
 * Layout component that provides the overall page structure.
 *
 * Contains a horizontal navigation bar at the top and a vertical
 * navigation bar on the side. Utilizes React Router's Outlet to
 * render nested routes within the main content area.
 *
 * @component
 * @returns {ReactElement} The Layout component
 */
function Layout() {
  return (
    <div className={styles.container}>
      <header>
        <NavHorizontal />
      </header>
      <main className={styles.main}>
        <NavVertical />
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
