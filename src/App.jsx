import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      console.log('User:', tg.initDataUnsafe?.user);
      tg.MainButton.setText('Продолжить');
      tg.MainButton.show();
    }
  }, []);

  return <h1>Привет из мини-приложения!</h1>;
}

export default App;
