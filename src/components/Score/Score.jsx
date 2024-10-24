import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

/**
 * Component displaying a user score radial chart
 * 
 * @param {object} props Component props
 * @param {number} props.data User score
 * @returns {ReactElement} Radial chart element
 */
const Score = ({ data }) => {
  const dataUpdated = [
    {
      name: 'score',
      value: data * 100,
    },
  ];

/**
 * Renders the objectives component displaying the user's progress towards their goal.
 * 
 * @returns {ReactElement} The objectives component
 */
  const Objectives = () => {
    return (
      <div className={styles.legendWrapper}>
        <p className={styles.legendWrapper__score}>
          {data ? dataUpdated[0].value : 0}%
        </p>
        <p className={styles.legendWrapper__description}>
          de votre <br />
          objectif
        </p>
      </div>
    );
  };

  return (
    <ResponsiveContainer className={styles.container} width="100%" height={263}>
      <RadialBarChart
        width={700}
        height={230}
        data={dataUpdated}
        innerRadius="65%"
        outerRadius="75%"
        startAngle={90}
        endAngle={90 + data * 360}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 10]}
          angleAxisId={0}
          tick={false}
        />
        <text x={20} y={30} className={styles.container__title}>
          Score
        </text>
        <Legend
          content={Objectives}
          align="center"
          verticalAlign="middle"
        />
        <RadialBar dataKey="value" cornerRadius={20} fill="#FF0000" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

Score.propTypes = {
  data: PropTypes.number,
};

export default Score;