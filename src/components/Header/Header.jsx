import React, { useContext, useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';
import './style.css';
import Button from '@mui/material/Button'

import IconBasket from './basketMaterial/BasketMaterial';
import { UserContext } from '../../context/userContext';

export const Header = () => {
  const { currentUser, searchQuery, setSearchQuery, parentCounter } = useContext(UserContext);
  const [counter, setCounter] = useState(parentCounter);

  console.log({ currentUser });


  useEffect(() => {
    setCounter((st) => st + 1);

    return () => setCounter(parentCounter)
  }, [parentCounter]);

  // state.push(); deprecated!!!
  return (
    <div className='header' id='head'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
           <div>
            <Button 
            variant="contained"
            size="large"
           onClick={() => {console.log("есть контакт")}}
            >Контакт</Button>
            </div>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div>
            <IconBasket count={counter} />
          </div>
          <div>
            <span>{currentUser.email} {' '}</span>
            <span>{currentUser.about}</span>
          </div>
        </div>
      </div>
    </div>
  );
};