import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // инициализация
      tg.expand(); // разворачиваем на весь экран
      setUser(tg.initDataUnsafe.user); // получаем данные пользователя
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Telegram Mini App</h1>
      {user ? (
        <p>
          Привет, {user.first_name} {user.last_name} (@{user.username})
        </p>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default App;
