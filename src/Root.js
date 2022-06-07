import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './views/MainPage';
import Start from './views/start';

const Root = (props) => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />}/>
                <Route path="/Main" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>   
    </>
);

Root.propTypes = {};

export default Root;
