import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const NutrientsIcons = ({ id, value }) => {
    const [icon, setIcon] = useState();
    const [unity, setUnity] = useState('g');
    const [small, setSmall] = useState();
    const [colors, setColors] = useState();

    useEffect(() => {
        const calorieCountIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect opacity="0.066125" width="60" height="60" rx="6" fill="#FF0000" />
                <path d="M31.905 28.8663C31.905 28.8663 32.8375 23.3812 29.0325 21C28.9178 22.9061 27.9968 24.6731 26.5 25.8587C24.875 27.2875 21.8187 30.5 21.8512 33.925C21.8274 36.9116 23.4991 39.6534 26.165 41C26.2593 39.6645 26.8874 38.4233 27.9075 37.5562C28.7719 36.8915 29.333 35.9074 29.465 34.825C31.7407 36.0348 33.2125 38.3521 33.34 40.9263V40.9425C35.8552 39.7904 37.5109 37.3241 37.625 34.56C37.895 31.3425 36.1325 26.9675 34.5687 25.5375C33.9784 26.8556 33.0615 28.0013 31.905 28.8663Z" fill="#FF0000" />
            </svg>
        );

        const proteinCountIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="6" fill="#4AB8FF" fillOpacity="0.1" />
                <path d="M39.2353 24.4706C38.8824 24.1176 38.4118 23.8823 38.0588 23.8823C37.9412 23.4118 37.8235 23.0588 37.4706 22.7059C36.6471 21.8823 35.2353 21.8823 34.4118 22.7059C33.7059 23.4118 33.5882 24.5882 34.1765 25.4118L31.5882 27.8823L30.2941 26.5882L27.7059 29.1765C27.4706 29.0588 27.1176 29.0588 26.8824 29.0588C23.5882 29.0588 21 31.647 21 34.9412C21 38.2353 23.5882 40.8235 26.8824 40.8235C30.1765 40.8235 32.7647 38.2353 32.7647 34.9412C32.7647 34.7059 32.7647 34.3529 32.6471 34.1176L35.2353 31.5294L33.9412 30.2353L36.4118 27.7647C37.2353 28.3529 38.4118 28.2353 39.1176 27.5294C40.0588 26.7059 40.0588 25.2941 39.2353 24.4706Z" fill="#4AB8FF" />
            </svg>
        );

        const glucidCountIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect opacity="0.101652" width="60" height="60" rx="6" fill="#F9CE23" />
                <path d="M37.6575 35.1C37.225 36.0575 37.0187 36.485 36.4612 37.3313C35.685 38.5125 34.5912 39.985 33.235 39.9975C32.03 40.0088 31.72 39.2138 30.085 39.2225C28.45 39.2313 28.1075 40.0113 26.9025 40C25.5462 39.9875 24.51 38.6588 23.7325 37.4763C21.5625 34.1713 21.335 30.2938 22.6737 28.2325C23.625 26.7663 25.1262 25.91 26.5387 25.91C27.9762 25.91 28.8787 26.6975 30.0675 26.6975C31.22 26.6975 31.9225 25.9088 33.585 25.9088C34.8412 25.9088 36.1725 26.5925 37.12 27.7738C34.0137 29.4775 34.5187 33.9138 37.6575 35.1Z" fill="#FDCC0C" />
            </svg>
        );

        const lipidCountIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="6" fill="#FD5181" fillOpacity="0.1" />
                <path d="M21.25 36C21.25 38.125 22.875 39.75 25 39.75H35C37.125 39.75 38.75 38.125 38.75 36H21.25Z" fill="#FD5181" />
                <path d="M38.75 33.5H21.25C20.5 33.5 20 33 20 32.25C20 31.5 20.5 31 21.25 31H38.75C39.5 31 40 31.5 40 32.25C40 33 39.5 33.5 38.75 33.5Z" fill="#FD5181" />
            </svg>
        );

        if (id === 'calorieCount') {
            setIcon(calorieCountIcon);
            setUnity('kCal');
            setSmall('Calories');
            setColors({
                color: '#ff0101',
                //backgroundColor: 'rgba(255, 1, 1, 0.06)',
            });
        } else if (id === 'proteinCount') {
            setIcon(proteinCountIcon);
            setSmall('Protéines');
            setColors({
                color: '#4ab8ff',
                //backgroundColor: 'rgba(74, 184, 255, 0.06)',
            });
        } else if (id === 'carbohydrateCount') {
            setIcon(glucidCountIcon);
            setSmall('Glucides');
            setColors({
                color: '#fdcc0c',
                //backgroundColor: 'rgba(253, 204, 12, 0.1)',
            });
        } else if (id === 'lipidCount') {
            setIcon(lipidCountIcon);
            setSmall('Lipides');
            setColors({
                color: '#fd5181',
                //backgroundColor: 'rgba(253, 81, 129, 0.1)',
            });
        }
    }, [id]);

    return (
        <div className={styles.nutrientContainer} style={colors}>
            <div className={styles.iconContainer}>
                {icon}
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.value}>
                    {value}
                    {unity}
                </div>
                <span className={styles.small}>{small}</span>
            </div>
        </div>
    );
};

NutrientsIcons.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default NutrientsIcons;
