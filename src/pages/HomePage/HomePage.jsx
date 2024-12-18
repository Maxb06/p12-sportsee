import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataFactory } from '../../services/factory';
import NutrientsList from '../../components/NutrientsList/NutrientsList';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import ChartSessions from '../../components/SessionDuration/SessionDuration';
import Intensity from '../../components/Intensity/Intensity';
import Score from '../../components/Score/Score';
import styles from './styles.module.scss';

/**
 * HomePage component that displays user information, daily activity, session duration,
 * intensity radar chart, score radial chart, and nutritional data.
 *
 * Utilizes React Router's useParams to extract the user ID from the URL.
 * Fetches and displays user data, activity, sessions, and performance using
 * the provided user ID. Updates the component state with the fetched data,
 * or logs an error and sets state to null if fetching fails.
 *
 * @component
 * @returns {ReactElement} The HomePage component
 */
function HomePage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
/**
 * Fetches user data, activity, sessions, and performance information
 * from the data source using the provided user ID.
 * 
 * Sets the corresponding state for each data type. If any data fetching
 * results in an error status, logs the error and sets the state to null.
 * 
 * @returns {void}
 */
  const fetchData = async () => {
    try {
      const user = await dataFactory.getUserData(id);  
      if (user?.status) {
        console.error(user);
        setUserData(null);
      } else {
        setUserData(user);
      }

      const userActivity = await dataFactory.getUserActivity(id); 
      if (userActivity?.status) {
        console.error(userActivity);
        setActivity(null);
      } else {
        setActivity(userActivity);
      }

      const userSessions = await dataFactory.getUserAverageSessions(id); 
      if (userSessions?.status) {
        console.error(userSessions);
        setSessions(null);
      } else {
        setSessions(userSessions);
      }

      const userPerformance = await dataFactory.getUserPerformance(id);
      if (userPerformance?.status) {
        console.error(userPerformance);
        setPerformance(null);
      } else {
        setPerformance(userPerformance);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData(); 
}, [id]); 

  return (
    <div className={styles.container}>
      <div className={styles.userName}>
        <h1>
          Bonjour <span>{userData?.firstName || ''}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <article className={styles.container__activity}>
        <div className={styles.container__titleContainer}>
          <h2 className={styles.container__title}>Activité quotidienne</h2>
          <ul>
            <li><span className={styles.blackDot}></span>Poids (kg)</li>
            <li><span className={styles.redDot}></span>Calories brûlées (kCal)</li>
          </ul>
        </div>
        {activity ? (
          <DailyActivity data={activity.sessions} />
        ) : (
          <p>Chargement des données activité...</p>
        )}
      </article>

      <div className={styles.container__charts}>
        <article className={styles.container__sessions}>
          {sessions ? (
            <ChartSessions data={sessions} />
          ) : (
            <p>Chargement des données des sessions...</p>
          )}
        </article>

        <article className={styles.container__intensity}>
          {performance ? ( 
            <Intensity data={performance} />
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
      </div>

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
