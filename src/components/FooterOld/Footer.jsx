

import s from './index.module.css';
import './style.css'; // предпочтительный импорт для начала



export const Footer = ({ arr, myownprops, children }) => {
  console.log('props', { arr, myownprops, children });
  // console.log('props', props);
  return (
    <>
    <div>
      {arr.map((el, i) => (
        <li key={i}>{el.name}</li>
      ))}
    </div>

    <p className={`${s.title} my-title`}>HELLLO</p>

    <h1 className='my-title'>{children}</h1>
    </>
  );
};

// function map(arr) {
//   let arr2 = [];
//   for (let index = 0; index < arr.length; index++) {
//   // arr2
// }
// return arr2;
// }

// function forEach(arr) {
//   for (let index = 0; index < arr.length; index++) {
//   // arr
// }
// return arr;
// }
