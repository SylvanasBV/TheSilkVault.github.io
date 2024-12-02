import React from 'react';
import styles from './App.module.css';
import Navbar from './components/NavBar/NavBar';
import Head_Page from './components/Head_Page/Head_Page';
import {About} from './components/About/About';
import Experience from './components/Experience/Experience.jsx';
import ScrollToTop from './components/Helpers/ScrollToTop.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div className={styles.App}>
        <ScrollToTop />
        <Navbar/>
        <Head_Page/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
