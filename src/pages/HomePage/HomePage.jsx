import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApiUserData, getApiUserActivity, getApiUserAverageSessions } from '../../services/api';
import UserName from '../../components/UserName/UserName';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import ChartSessions from '../../components/SessionDuration/SessionDuration';
import styles from './styles.module.scss';

function HomePage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    const user = getApiUserData(id);
    if (user) {
      setUserData(user); // Stock toutes les info utilisateur
    }

    const userActivity = getApiUserActivity(id); // Recup les données d'activité
    if (userActivity) {
      setActivity(userActivity); // Met à jour l'état avec les données activité
    }

    const userSessions = getApiUserAverageSessions(id); // Récup les données de session
    if (userSessions) {
      setSessions(userSessions); // Met à jour l'état avec les données de session
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <UserName name={userData?.firstName || ''} />

      <article className={styles.container__activity}>
        <div className={styles.container__titleContainer}>
          <h2 className={styles.container__title}>Activité quotidienne</h2>
          <ul>
            <li><span className={styles.blackDot}></span>Poids (kg)</li>
            <li><span className={styles.redDot}></span>Calories brûlées (kCal)</li>
          </ul>
        </div>
        {activity ? (
          <DailyActivity data={activity} />
        ) : (
          <p>Chargement des données activité...</p>
        )}
      </article>

      <article className={styles.container__sessions}>
        {sessions ? (
          <ChartSessions data={{ sessions: sessions }} />
        ) : (
          <p>Chargement des données des sessions...</p>
        )}
      </article>
    </div>
  );
}

export default HomePage;
