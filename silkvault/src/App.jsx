import React from 'react';
import styles from './App.module.css';
import Navbar from './components/NavBar/NavBar';
import Head_Page from './components/Head_Page/Head_Page';
function App() {
  return (
    <div className="App">
      <div className={styles.App}>
        <Navbar/>
        <Head_Page/>
      </div>
    </div>
  );
}

export default App;
