import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';
import './styles/App.css';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowResize();
  const isMobile = width <= 412;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
    if (width <= 412) {
      setTheme('light');
    }
  }, [width]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} showToggle={!isMobile} />
      <LandingPage />
    </div>
  );
};

export default App;