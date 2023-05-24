import BelarusianFlag from "./BelarusianFlag";

export const sectionTitle = 'Work Experience';

export const places = [
  {
    title: 'Senior Frontend Developer / React Native Developer',
    company: 'Gosu.team',
    location: 'Poland, Warsaw',
    locationFlag: <span>🇵🇱</span>,
    startDate: new Date(2023, 4),
    link: 'https://gosu.team'
  },
  {
    title: 'Senior Frontend Developer / React Native Developer',
    company: 'PixelPlex',
    location: 'Remote',
    locationFlag: <span>🌍</span>,
    startDate: new Date(2021, 4),
    endDate:  new Date(2022, 3),
  }, {
  title: 'Frontend Developer',
  company: 'Epam Systems',
  location: 'Remote',
  locationFlag: <span>🌍</span>,
  startDate: new Date(2021, 0),
  endDate:  new Date(2021, 4),
}, {
  title: 'Frontend Developer',
  company: 'PixelPlex',
  location: 'Belarus, Minsk',
  locationFlag: <BelarusianFlag />,
  startDate: new Date(2018, 1),
  endDate: new Date(2020, 12),
}];
