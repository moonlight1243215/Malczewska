import { Link } from 'react-router-dom';
import styles from './index.module.css';

const MainPage = (props) => (
    <>
            <div className={styles.backgroundImage}>
                <div className={styles.box}>
                    <div className={styles.center}>
                        <div className={styles.firstBox}>
                            <div>
                                <p className={styles.title}>Dni otwarte</p>
                                <p className={styles.secondTitle}>Malczewskiej</p>
                                <p className={styles.thirdTitle}>Zwiedź malczewską i wypij herbatkę z dyrektorme</p>
                            </div>
                            <div className={styles.logo}></div>
                        </div>
                        <Link to="/Main" className={styles.secondBox}>START</Link>
                        <div className={styles.thirdBox}>
                            <p className={styles.text}>Po odgadnięciu zagadki kliknij na klamkę aby wejść do klasy</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
);


export default MainPage;
