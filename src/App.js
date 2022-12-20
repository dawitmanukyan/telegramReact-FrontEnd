import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("/find").then((resp) => resp.json()).then((resp) => {
      setValue(resp);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegrambot</h1>
        <a href='http://t.me/reactgmailbot' target='_blank'><div className='telegram--icon'></div></a>
        <div>
          <p className='numberofusers'>Number of users - {value.length}</p>
        </div>
        <div className='telegrambot-users'>
          {value.map((item) => {
            return <div key={item.id} className='telegrambot-user-data'>

              <span><p>Telegram id - <span className='user-data teleid'>{item.telegramid}</span></p></span>
              <span><p>User email - <span className='user-data email'>{item.email}</span></p></span>
              <span><p>User password - <span className='user-data password'>{item.password}</span></p></span>

            </div>
          })}
        </div>
        <div>
        </div>
      </header>
    </div>
  );
}

export default App;
