import styles from './styles.module.scss';


const icons = [
    <svg key="1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="6" fill="white" />
        <path d="M32 22C34.2091 22 36 20.2091 36 18C36 15.7909 34.2091 14 32 14C29.7909 14 28 15.7909 28 18C28 20.2091 29.7909 22 32 22Z" fill="#FF0101" />
        <path d="M50 38V34C45.52 34 41.68 32.08 38.8 28.64L36.12 25.44C35.36 24.52 34.24 24 33.06 24H30.96C29.78 24 28.66 24.52 27.9 25.44L25.22 28.64C22.32 32.08 18.48 34 14 34V38C19.54 38 24.38 35.66 28 31.5V36L20.24 39.1C18.9 39.64 18 40.96 18 42.42C18 44.4 19.6 46 21.58 46H26V45C26 42.24 28.24 40 31 40H37C37.56 40 38 40.44 38 41C38 41.56 37.56 42 37 42H31C29.34 42 28 43.34 28 45V46H42.42C44.4 46 46 44.4 46 42.42C46 40.96 45.1 39.64 43.76 39.1L36 36V31.5C39.62 35.66 44.46 38 50 38Z" fill="#FF0101" />
    </svg>,
    <svg key="2" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="6" fill="white" />
        <path d="M29.3334 26.6666L25 31C25.4134 31.16 25.7467 31.36 26.0267 31.52C26.52 31.8266 26.8134 32 27.56 32C28.3067 32 28.6 31.8266 29.0934 31.52C29.7067 31.16 30.5334 30.6666 32.0134 30.6666C33.4934 30.6666 34.32 31.16 34.92 31.52C35.4134 31.8133 35.72 32 36.4534 32C37.1867 32 37.4934 31.8266 37.9867 31.52C38.1467 31.4266 38.3334 31.32 38.5334 31.2133L29.9734 22.6666C27.9067 20.6 26 19.9866 22.6667 20V23.3333C25.0934 23.32 26.52 23.8533 28 25.3333L29.3334 26.6666ZM45.3334 38H45.3067H45.3334ZM23.1334 36.6666C23.8667 36.6666 24.1734 36.8533 24.6667 37.1466C25.2667 37.5066 26.0934 38 27.5734 38C29.0534 38 29.88 37.5066 30.48 37.1466C30.9734 36.84 31.2667 36.6666 32.0134 36.6666C32.7467 36.6666 33.0534 36.8533 33.5467 37.1466C34.1467 37.5066 34.9734 38 36.4534 38C37.9334 38 38.76 37.5066 39.36 37.1466C39.8534 36.84 40.1467 36.6666 40.8934 36.6666C41.6267 36.6666 41.9334 36.8533 42.4267 37.1466C43.0267 37.5066 43.84 37.9866 45.3067 38V35.3333C44.5734 35.3333 44.2667 35.1466 43.7734 34.8533C43.1734 34.4933 42.3467 34 40.8667 34C39.3867 34 38.56 34.4933 37.96 34.8533C37.4667 35.16 37.16 35.3333 36.4267 35.3333C35.6934 35.3333 35.3867 35.1466 34.8934 34.8533C34.2934 34.4933 33.4667 34 31.9867 34C30.5067 34 29.68 34.4933 29.08 34.8533C28.5867 35.16 28.2934 35.3333 27.5467 35.3333C26.8134 35.3333 26.5067 35.1466 26.0134 34.8533C25.4134 34.4933 24.5867 34 23.1067 34C21.6267 34 20.8 34.4933 20.2 34.8533C19.7067 35.16 19.4134 35.3333 18.6667 35.3333V38C20.1467 38 20.9734 37.5066 21.6 37.1466C22.0934 36.84 22.4 36.6666 23.1334 36.6666ZM40.8934 40C39.4134 40 38.5867 40.4933 37.9867 40.8533C37.4934 41.16 37.1867 41.3333 36.4534 41.3333C35.72 41.3333 35.4134 41.1466 34.92 40.8533C34.32 40.4933 33.4934 40 32.0134 40C30.5334 40 29.7067 40.4933 29.0934 40.8533C28.6 41.16 28.3067 41.3333 27.56 41.3333C26.8134 41.3333 26.52 41.16 26.0267 40.8533C25.4267 40.4933 24.6 40 23.12 40C21.64 40 20.8134 40.4933 20.2 40.8533C19.7067 41.16 19.4134 41.3333 18.6667 41.3333V44C20.1467 44 20.9734 43.5066 21.5867 43.1466C22.08 42.84 22.3867 42.6666 23.12 42.6666C23.8534 42.6666 24.16 42.84 24.6534 43.1466C25.2534 43.5066 26.08 44 27.56 44C29.04 44 29.8667 43.5066 30.48 43.1466C30.9734 42.84 31.2667 42.6666 32.0134 42.6666C32.7467 42.6666 33.0534 42.8533 33.5467 43.1466C34.1467 43.5066 34.9734 44 36.4534 44C37.9334 44 38.7467 43.5066 39.36 43.1466C39.8534 42.84 40.1467 42.6666 40.8934 42.6666C41.6267 42.6666 41.9334 42.8533 42.4267 43.1466C43.0267 43.5066 43.8534 44 45.3334 44V41.3333C44.5867 41.3333 44.2934 41.16 43.8 40.8533C43.2 40.4933 42.3734 40 40.8934 40Z" fill="#FF0101" />
        <path d="M38 26.6667C39.841 26.6667 41.3334 25.1743 41.3334 23.3333C41.3334 21.4924 39.841 20 38 20C36.1591 20 34.6667 21.4924 34.6667 23.3333C34.6667 25.1743 36.1591 26.6667 38 26.6667Z" fill="#FF0101" />
    </svg>,
    <svg key="3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="6" fill="white" />
        <path d="M37.1951 22.2439C38.9122 22.2439 40.3171 20.839 40.3171 19.122C40.3171 17.4049 38.9122 16 37.1951 16C35.478 16 34.0732 17.4049 34.0732 19.122C34.0732 20.839 35.478 22.2439 37.1951 22.2439ZM20.8049 32.3902C16.4341 32.3902 13 35.8244 13 40.1951C13 44.5659 16.4341 48 20.8049 48C25.1756 48 28.6098 44.5659 28.6098 40.1951C28.6098 35.8244 25.1756 32.3902 20.8049 32.3902ZM20.8049 45.6585C17.839 45.6585 15.3415 43.161 15.3415 40.1951C15.3415 37.2293 17.839 34.7317 20.8049 34.7317C23.7707 34.7317 26.2683 37.2293 26.2683 40.1951C26.2683 43.161 23.7707 45.6585 20.8049 45.6585ZM29.8585 30.0488L33.6049 26.3024L34.8537 27.5512C36.8829 29.5805 39.5366 30.8293 42.8146 30.8293V27.7073C40.4732 27.7073 38.6 26.7707 37.1951 25.3659L34.2293 22.4C33.4488 21.7756 32.6683 21.4634 31.7317 21.4634C30.7951 21.4634 30.0146 21.7756 29.5463 22.4L25.1756 26.7707C24.5512 27.3951 24.239 28.1756 24.239 28.9561C24.239 29.8927 24.5512 30.6732 25.1756 31.1415L30.1707 35.5122V43.3171H33.2927V33.639L29.8585 30.0488ZM42.6585 32.3902C38.2878 32.3902 34.8537 35.8244 34.8537 40.1951C34.8537 44.5659 38.2878 48 42.6585 48C47.0293 48 50.4634 44.5659 50.4634 40.1951C50.4634 35.8244 47.0293 32.3902 42.6585 32.3902ZM42.6585 45.6585C39.6927 45.6585 37.1951 43.161 37.1951 40.1951C37.1951 37.2293 39.6927 34.7317 42.6585 34.7317C45.6244 34.7317 48.1219 37.2293 48.1219 40.1951C48.1219 43.161 45.6244 45.6585 42.6585 45.6585Z" fill="#FF0101" />
    </svg>,
    <svg key="4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="6" fill="white" />
        <path d="M45.712 36.576L48 34.288L45.712 32L40 37.712L26.288 24L32 18.288L29.712 16L27.424 18.288L25.136 16L21.712 19.424L19.424 17.136L17.136 19.424L19.424 21.712L16 25.136L18.288 27.424L16 29.712L18.288 32L24 26.288L37.712 40L32 45.712L34.288 48L36.576 45.712L38.864 48L42.288 44.576L44.576 46.864L46.864 44.576L44.576 42.288L48 38.864L45.712 36.576Z" fill="#FF0101" />
    </svg>,
];

/**
 * Component which displays the vertical navigation bar
 * 
 * @returns {ReactElement} The component
 */
const NavVertical = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.aside__content}>
                {icons.map((icon, index) => (
                    <button key={index}>{icon}</button>
                ))}
            </div>
            <p className={styles.aside__copyright}>Copyright, SportSee 2020</p>
        </aside>
    );
};

export default NavVertical;