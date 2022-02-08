import light from '../image/light.svg';
import dark from '../image/dark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Contents = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <div>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Light / Dark Mode</p>
      </div>
      <img src={theme === 'dark' ? dark : light} alt='logo' />
    </main>
  );
};

export default Contents;
