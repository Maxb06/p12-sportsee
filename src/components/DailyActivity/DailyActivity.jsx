import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/**
 * Custom tooltip for displaying activity data
 * @param {object} props
 * @returns {ReactElement} Custom tooltip element
 */
const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.customTooltip__text}>{`${payload[0].value}kg`}</p>
        <p className={styles.customTooltip__text}>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

/**
 * Component displaying daily activity bar chart
 * 
 * @param {object} props 
 * @param {Array} props.data Activity data
 * @returns {ReactElement} Bar chart element
 */
const DailyActivity = ({ data }) => {
  const dataUpdated = data.map((item, index) => ({
    ...item,
    day: index + 1,
  }));

  return (
    <ResponsiveContainer className={styles.container} height={250}>
      <BarChart
        width={500}
        height={300}
        data={dataUpdated}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 15,
        }}
        barGap={10}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey={'day'}
          tickMargin={10}
          tickSize="0"
          padding={{ left: -32, right: -33 }}
        />
        <YAxis
          dataKey="kilogram"
          domain={['dataMin - 2', 'dataMax + 1']}
          allowDecimals={false}
          tickMargin={30}
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickCount={3}
        />
        <Tooltip content={<CustomToolTip />} animationEasing="ease-out" />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

DailyActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DailyActivity;
