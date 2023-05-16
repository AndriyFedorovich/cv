import React, { memo } from 'react';
import { title, list } from './data';
import s from './About.module.scss';

const About = () => (
  <>
    <h2 className={s.title}>{title}</h2>
    <ul className={s.list}>
      {list.map((item) => (
        <li className={s.text} key={item}>{item}</li>
      ))}
    </ul>
  </>
);

export default memo(About);
