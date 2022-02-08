import './App.css';
import Title from './components/Title';
import Contents from './components/Content';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Title />
        <Contents />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
