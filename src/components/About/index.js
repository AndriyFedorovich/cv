import React, { memo } from 'react';
import { list } from './data';
import s from './About.module.scss';

const About = () => (
  <>
    <ul className={s.list}>
      {list.map((item) => (
        <li className={s.text} key={item}>{item}</li>
      ))}
    </ul>
  </>
);

export default memo(About);
