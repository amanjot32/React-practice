import { useState, useEffect } from 'react';
import Header from './core/components/header';
import NewsTile from './core/components/news_tile';
import Footer from './core/components/footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className='p-7 dark:bg-custom-gray'>
        <NewsTile title={'Debby A Little Stronger; Flood Threat Continues - The Weather Channel'} desc={"The stock market continues to recover from Monday's brutal sell-off, yet third-quarter earnings outlooks are pressuring some companies.\nThe S&P 500 is up 1%, and the tech-heavy Nasdaq Composite added 1.1%. The Dow Jones Industrial Average gained 0.6%,"} imgUrl={''} authorName={'Amanjot'} date={'07/08/2024'} />
      </div>
      <Footer />
    </>
  );
}

export default App;
