import React, { memo } from 'react'
import s from './BelarusianFlag.module.scss'

const BelarusianFlag = () => (
  <div className={s.wrap}>
    <span  className={s.red} />
  </div>
)


export default memo(BelarusianFlag)
