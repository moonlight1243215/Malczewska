import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../../data';
import styles from './index.module.css';

const MenuBar = () => {

const [number, setNumber] = useState(0);
const [view, setView] = useState(true);
const [mainView, setMainView] = useState(true);
const [vie, setVie] = useState(true);

const width = window.innerWidth;
const height = window.innerHeight;

while(width < height) {
    alert("Aplikacja przystosowana do kompóterów zmień urządzenie")
}

const val = (e) => {
    const val = e.target.value;
    const answear = Data[number].answear
    if(val == answear) {
        setView(false)
    }
    else {
        setView(true)
    }
}

const add = () => {
    setView(true)
    setNumber(number + 1)
}

const fun = () => {
    setMainView(false)
}

const com = () => {
    setMainView(true)
    setNumber(number + 1)
    setView(true)
}



return(
    <>
    {mainView ? 
    <div className={styles.background}>
        <img src={Data[number].photo} className={styles.img}/>
       <div className={styles.doorPhoto}>
        <div className={styles.questionBox}>
                <input onChange={val} type="text" className={styles.input} placeholder="Odpowiedź"/>
            </div> 
            {view ? null
            : 
            <div onClick={fun} id="handle" style={{"left" : Data[number].left ,"top" : Data[number].top}}  className={styles.handle}></div>
            }
       </div>
       <div className={styles.logo}></div>
    </div>
    :
    <div className={styles.secondBackground}>
        <img src={Data[number].photoInside}  className={styles.back}/>
        <button className={styles.link} onClick={com}>Dalej</button>
    </div>
    }
    </>
)};


export default MenuBar;
