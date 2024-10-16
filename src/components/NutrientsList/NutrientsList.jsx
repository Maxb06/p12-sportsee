import NutrientsIcons from '../NutrientsIcons/NutrientsIcons';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

/**
 * @function
 * @param {object} list - an object containing the nutrients and their amounts
 * @returns {ReactElement} - a ReactElement representing the list of nutrients
 * @description
 * This function renders a list of nutrients and their amounts.
 * It takes one prop, an object containing the nutrients and their amounts.
 * The function returns a ReactElement representing the list of nutrients.
 */
const NutrientsList = ({ list }) => {
  const objectKeys = Object.keys(list);

  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        {objectKeys.map((item, index) => (
          <li
            className={styles.container__list__item}
            key={`nutrition-${index}`}
          >
            <NutrientsIcons id={item} value={list[item]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

NutrientsList.propTypes = {
  list: PropTypes.object
};

export default NutrientsList;

