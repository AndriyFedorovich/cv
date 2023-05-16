import React, { memo } from 'react';
import { sectionTitle, projects } from './data';
import s from './Projects.module.scss';

const Projects = () => (
  <>
    <h2 className={s.title}>{sectionTitle}</h2>
    <div className={s.list}>{projects.map(({
      title,
      description, role, participation,
      technologies, tools,
    }) => (
      <div key={title} className={s.item}>
        <h3 className={s.projectTitle}>{title}</h3>
        <div className={s.grid}>
          <span className={s.key}>Role:</span>
          <p>{role}</p>

          {description ?
            <>
              <span className={s.key}>Description:</span>
              <p>{description}</p>
            </> : null}

          {!!participation?.length &&
            <>
              <span className={s.key}>Participation:</span>
              <ul className={s.list}>
                {participation.map(participationItem =>
                  <li key={participationItem}>{participationItem}</li>)
                }
              </ul>
            </>
          }

          <span className={s.key}>Technologies:</span>
          <p>{technologies}</p>

          <span className={s.key}>Tools:</span>
          <p>{tools}</p>
        </div>
      </div>
    ))}
    </div>
  </>
);

export default memo(Projects);
