import React from 'react'

import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';
const Footer = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:andres7.7mac@gmail.com">andres7.7mac@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
            <a href="http://www.linkedin.com/in/andres-barbosa-gamedeveloper">linkedin.com/andresbarbosa</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
            <a href="https://github.com/SylvanasBV">GitHub/SylvanasBV</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
