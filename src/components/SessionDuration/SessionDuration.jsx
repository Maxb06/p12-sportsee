import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from 'recharts';

const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/**
 * Component for rendering a line chart displaying session duration.
 *
 * @param {object} data - The data to be displayed in the chart.
 * @param {Array} data.sessions - Array of session objects containing session length.
 * @returns {ReactElement} The rendered line chart component.
 */
const ChartSessions = ({ data }) => {
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className={styles.lineChart}>
            <p className={styles.lineChart__label}>{`${payload[0].value} min`}</p>
          </div>
        );
      }
      return null;
    };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
      })
    ),
  };

  /**
   * Custom cursor for LineChart
   * @param {object} props
   * @prop {object} points
   * @prop {number} width
   * @returns {ReactElement} Custom cursor element
   */
  const CustomCursor = (props) => {
    const { points, width } = props;
    const { x } = points[0];
    return (
      <Rectangle
        fill="#000000"
        stroke="#000000"
        opacity={0.1}
        x={x}
        y={0}
        width={width}
        height={263}
      />
    );
  };

  CustomCursor.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number,
  };

  const dataUpdated = data.sessions ? data.sessions.map((item, index) => {
    return {
      day: DAYS[index],
      sessionLength: item.sessionLength,
    };
  }) : [];

  /**
   * Renders the legend for the SessionDuration chart
   * @returns {ReactElement} The rendered legend
   */
  const renderLegend = () => {
    return (
      <h3 className={styles.title}>
        Durée moyenne des
        <br />
        sessions
      </h3>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={263} className={styles.container}>
      <LineChart
        data={dataUpdated}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorGradiant" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff80" />
            <stop offset="50%" stopColor="#ffffffbf" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={'day'}
          tickLine={false}
          axisLine={false}
          padding={{ left: 15, right: 15 }}
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          tickMargin={10}
          height={35}
        />
        <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
        <Legend content={renderLegend} align="left" verticalAlign="top" />
        <Line
          type="basis"
          dataKey="sessionLength"
          stroke="url(#colorGradiant)"
          strokeWidth={3}
          dot={false}
          activeDot={{
            stroke: 'white',
            strokeWidth: 10,
            strokeOpacity: 0.4,
            fill: 'white',
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartSessions;

ChartSessions.propTypes = {
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          sessionLength: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };
  
