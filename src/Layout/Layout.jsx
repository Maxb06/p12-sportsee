import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import NavHorizontal from '../components/NavHorizontal/NavHorizontal';
import NavVertical from '../components/NavVertical/NavVertical';
import styles from './styles.module.scss';


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
