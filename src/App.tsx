import { useState, useEffect } from 'react';
import Header from './core/components/header';
import Footer from './core/components/footer';
import NewsList from './feature/news/newsList';

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
      {/* BODY STARTS FROM HERE */}
      <div className='p-7 dark:bg-light-gray'>
        <NewsList />
      </div>
      {/* BODY ENDS HERE */}
      <Footer />
    </>
  );
}

export default App;
