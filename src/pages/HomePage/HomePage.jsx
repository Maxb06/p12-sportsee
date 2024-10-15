import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApiUserData, getApiUserActivity, getApiUserAverageSessions, getApiUserPerformance } from '../../services/api';
import UserName from '../../components/UserName/UserName';
import NutrientsList from '../../components/NutrientsList/NutrientsList';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import ChartSessions from '../../components/SessionDuration/SessionDuration';
import Intensity from '../../components/Intensity/Intensity';
import Score from '../../components/Score/Score';
import styles from './styles.module.scss';

function HomePage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

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

    const userPerformance = getApiUserPerformance(id);
    if (userPerformance) {
      setPerformance(userPerformance);
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

      <article className={styles.container__intensity}>
        {performance ? ( 
          <Intensity data={{ data: performance }} />
        ) : (
          <p>Chargement des données de performance...</p>
        )}
      </article>

      <article className={styles.container__score}>
        {userData ? (
          <Score data={userData.todayScore} />
        ) : (
          <p>Chargement des données du score...</p>
        )}
      </article>

      <article className={styles.container__nutrients}>
      {userData ? (
          <NutrientsList list={userData.keyData} />
        ) : (
          <p>Chargement des données nutritionnelles...</p>
        )}
      </article>
    </div>
  );
}

export default HomePage;
