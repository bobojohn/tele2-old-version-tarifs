import React from 'react';
import './App.css';
import Tarif from './components/Tarifs/Tarif';

function App() {
  const tarifs = [
    {
      title: "Мой онлайн+", price: 700, text: "безлимит на Tele2 России",
      minutes: 800, internet: "30 ГБ интернета", id: "first"
    },
    {
      title: "Везде онлайн+", price: 500, text: "безлимит на Tele2 России",
      minutes: 500, internet: "40 ГБ интернета"
    },
    {
      title: "Мой онлайн", price: 400, text: "безлимит на Tele2 России",
      minutes: 500, internet: "15 ГБ интернета"
    }
  ]
  return (
    <div className="root__app">
      {
        tarifs.map(o => <Tarif id={o.id} title={o.title} price={o.price} text={o.text} minutes={o.minutes} internet={o.internet} />)
      }
    </div>
  );
}

export default App;
