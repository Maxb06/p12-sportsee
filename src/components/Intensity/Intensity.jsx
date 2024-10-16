import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const TOPIC = {
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
};

/**
 * Component displaying user intensity radar chart
 * 
 * @param {object} props 
 * @param {object} props.data User intensity data
 * @returns {ReactElement} Radar chart element
 */
const Intensity = ({ data }) => {
  const dataUpdated = data.data.map((item, index) => {
    return {
      ...item,
      subject: TOPIC[index + 1],
    };
  }).reverse();

  return (
    <ResponsiveContainer width="100%" height={220} className={styles.container}>
      <RadarChart data={dataUpdated} innerRadius="5%" outerRadius={window.innerWidth < 1200 ? '60%' : '80%'}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'white', fontSize: 14 }}
          tickSize={10}
          dy={5}
        />
        <PolarRadiusAxis
          tick={false}
          axisLine={false}
          tickCount={6}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

Intensity.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Intensity;
