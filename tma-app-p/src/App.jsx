import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      tg.ready()
      tg.expand()
      console.log('Telegram WebApp initialized')
    }
  }, [])

  return (
    <div>
      <h1>Hello Telegram</h1>
      <p>Мини-приложение загружено внутри Telegram!</p>
    </div>
  )
}

export default App
