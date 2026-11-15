import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичний вибір теми за часом
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  // Застосування теми до <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 rounded-lg bg-slate-800 text-white dark:bg-slate-200 dark:text-black"
        >
           Тема
        </button>
      </div>

      <Header />

      <main className="flex-grow max-w-5xl mx-auto p-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Experience />
        <Education />
        <Reviews />
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
