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
      <Tarif id={tarifs[0].id} title={tarifs[0].title} price={tarifs[0].price} text={tarifs[0].text}
        minutes={tarifs[0].minutes} internet={tarifs[0].internet} />
      <Tarif title={tarifs[1].title} price={tarifs[1].price} text={tarifs[1].text}
        minutes={tarifs[1].minutes} internet={tarifs[1].internet} />
      <Tarif title={tarifs[2].title} price={tarifs[2].price} text={tarifs[2].text}
        minutes={tarifs[2].minutes} internet={tarifs[2].internet} />
    </div>
  );
}

export default App;
