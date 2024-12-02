import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Head_Page.module.css";
const Head_Page = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Andres </h1>
        <p className={styles.description}> 
            I'm a full-stack-developer with 1 year of experience using React and NodeJS.
            with knowledge in Java,Python,C#.
        </p>
        <h1 className={styles.description}>Welcome to my voult</h1>
        
        <a href="mailto:andres7.7mac@gmail.com" 
        className={styles.contactBtn}>
            Contact Me
        </a>
      </div>
      <img src={getImageUrl("character/heroImage.png")} alt="Character image of me" className={styles.heroImg}/>
       <div className={styles.topBlur} />
       <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Head_Page
