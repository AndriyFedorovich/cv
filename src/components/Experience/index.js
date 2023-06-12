import { format } from 'date-fns'
import { getPeriod } from '../../helpers/date.helper';
import { sectionTitle, places } from './data';
import s from './Experience.module.scss';

const Experience = () => (
  <>
    <h2 className={s.sectionTitle}>{sectionTitle}</h2>
    <div className={s.places}>{places.map(({
      title,
      location, company,
      startDate, endDate,
      locationFlag, link
    }) => (
      <div key={startDate} className={s.place}>
        <div className={s.row}>
          <p>
            {title} at {link ? <a target="_blank" rel="noopener noreferrer" href={link}>{company}</a> : company}
          </p>
          <div className={s.location}>
            <p className={s.locationText}>{location}</p>
            {!!locationFlag && <span className={s.locationFlag}>
              {locationFlag}
            </span>}
          </div>
        </div>
        <span>
          {`${format(startDate, 'MMM yyyy')} - ${endDate ? format(endDate, 'MMM yyyy') : 'Present'}`}
        </span>
        <span className={s.period}>
          {getPeriod(startDate, endDate)}
        </span>
      </div>
    ))}
    </div>
  </>
);

export default Experience;
