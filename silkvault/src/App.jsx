import React from 'react';
import styles from './App.module.css';
import Navbar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <div className={styles.App}>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
