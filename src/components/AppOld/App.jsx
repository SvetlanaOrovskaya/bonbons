import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css';
import data from '../../data/data.json';
import data2 from '../../data/data2.json';

function App() {
  // const smth = useState();
  const [isCardsVisible, setCardsVisible] = useState(false);
  const [changeData, setChangeData] = useState(false);

  // setState('not wednesday');
  console.log({ isCardsVisible, changeData });

  // error ->
  // state = 'newSttiasdfsadfasdfng';

  let flag = true;


  const handleClick = () => {
    setCardsVisible((state) => !state);
  };

  const handleClickData = () => {
    setChangeData((state) => !state);
    // flag = !flag;
  };
  return (
    <>
      {/*  header */}
      <Header />
      {/*  content */}
      <main className='content container'>
        <button className='btn' onClick={handleClick}>
          {isCardsVisible ? 'Убрать' : 'Показ карточек'}
        </button>
        <button className='btn' onClick={handleClickData}>
          {changeData ? 'Собачки' : 'Рик и Морти'}
        </button>
        {/* Card */}
        {/* <div className='content__cards'></div> */}
        {isCardsVisible && <CardList cards={changeData ? data : data2} />}
      </main>
      {/*  footer */}
      <Footer />
    </>
  );
}

export default App;

// const handleClick = (e) => {
//   console.log('hello');
// };

{
  /* <button
className='btn'
onClick={() => handleClick(title)}
onFocus={(ev) => {
  console.log('>>>>>>>>>> onfocus');
}}
>
click
</button> */
}
