import React from 'react'
import { getImageUrl } from '../../utils'
import style from './ProjectsCard.module.css'


const ProjectsCard = ({project: {title,imageSrc,description,skills,demo,source}}) => {
  return (
      <div className={style.container}>
            <img src={getImageUrl(imageSrc)} className={style.image} alt={`Image of ${title}`} />
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <ul className={style.skills}>
                {skills.map((skill,id)=>{
                    return <li key={id} className={style.skill}>
                        {skill}
                    </li>
                })}
            </ul>
            <div className={style.links}>
                <a href={demo} className={style.link}>Demo</a>
                <a href={source} className={style.link}>Source</a>
            </div>
        </div>
  )
}

export default ProjectsCard
