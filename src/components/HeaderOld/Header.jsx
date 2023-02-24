import './style.css';

import LogoUrl, { ReactComponent as Logo } from '../../logo.svg';

export const Header = () => {
  return (
    <div className='header'>
      this is header
      {/* <img src={LogoUrl} alt='img'/>
      <Logo className="logo-app" /> */}
    </div>
  );
};
