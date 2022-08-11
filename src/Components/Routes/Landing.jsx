import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

//router
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";
import AllCategory from '../Category/AllCategory';
import Men from '../Category/Men'
import Women from '../Category/Women'
import Kids from '../Category/Kids';
const Landing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<><Header stl=''/><Body /><Footer /></>} />
                <Route path='/Category/AllCategory' element={<><Header/> <AllCategory/> <Footer/></>} />
                <Route path='/Category/Men' element={<><Header/> <Men/> <Footer/></>} />
                <Route path='/Category/Women' element={<><Header/> <Women/> <Footer/></>} />
                <Route path='/Category/Kids' element={<><Header/> <Kids/> <Footer/></>} />

            </Routes>
        </Router>
    );
}

export default Landing;