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

const KINDS = {
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
};

const Intensity = ({ data }) => {
  const dataUpdated = data.data.map((item) => {
    return {
      ...item,
      subject: KINDS[item.kind],
    };
  }).reverse();

  return (
    <ResponsiveContainer width="30%" height={230} className={styles.container}>
      <RadarChart data={dataUpdated} innerRadius="5%" outerRadius={window.innerWidth < 1200 ? '60%' : '80%'}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'black', fontSize: 14 }}
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
