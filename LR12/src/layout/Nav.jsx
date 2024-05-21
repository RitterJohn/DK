import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from '../pages/About.jsx';
import Contacts from '../pages/Contacts';
import Faq from '../pages/Faq';
import Portfolio from '../pages/Portfolio';
import Products from '../pages/Products';
import Services from '../pages/Services';
import styles from './Nav.module.css';
import logo_img from "../img/logo.svg";
import calc_img from "../img/calculation.svg";
import meas_img from "../img/measering.svg";

function Nav() {
    return (
        <Router>
            <div>
                <nav className={styles.navigate}>
                    <img src={logo_img} alt="pic" />
                    <div className={styles.navBar}>
                        <Link className={styles.var} to="services">Services</Link>
                        <Link className={styles.var} to="products">Products</Link>
                        <Link className={styles.var} to="about">About us</Link>
                        <Link className={styles.var} to="portfolio">Portfolio</Link>
                        <Link className={styles.var} to="faq">FAQ</Link>
                        <Link className={styles.var} to="contacts">Contacts</Link>
                    </div>
                    <div className={styles.btns}>
                    <div className={styles.meas}><img src={meas_img}></img>Make request</div>
                    <div className={styles.calc}><img src={calc_img}></img>Calculation</div>
                    </div>
                </nav>
                <div className={styles.text}>
                    <Routes>
                        <Route path="services" element={<Services />} />
                        <Route path="products" element={<Products />} />
                        <Route path="about" element={<About />} />
                        <Route path="portfolio" element={<Portfolio />} />
                        <Route path="faq" element={<Faq />} />
                        <Route path="contacts" element={<Contacts />} />
                    </Routes>
                </div>
                
            </div>
        </Router>
    )
}

export default Nav;