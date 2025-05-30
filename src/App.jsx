import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.MainButton.setText('Отправить данные');
    tg.MainButton.onClick(() => {
      tg.sendData('Привет от WebApp!'); // Отправит в бота данные
    });
    tg.MainButton.show();
  }, []);

  return (
    <div>
      <h1>Привет, {window.Telegram.WebApp.initDataUnsafe.user.first_name}!</h1>
    </div>
  );
}

export default App;
