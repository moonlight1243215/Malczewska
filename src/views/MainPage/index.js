import styles from './index.module.css';
import PhotoBar from "../../components/PhotoBar/index"

const MainPage = (props) => (
    <div className={styles.wrapper}>
        <PhotoBar />
    </div>
);

export default MainPage;
