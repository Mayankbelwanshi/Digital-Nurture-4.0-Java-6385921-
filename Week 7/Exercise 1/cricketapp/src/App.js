import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

const App = () => {
  const [showList, setShowList] = useState(true);

  const toggleComponent = () => {
    setShowList(prev => !prev);
  };

  return (
    <div style={{ padding: '20px'
      ,fontFamily: 'sans-serif,Arial',
      backgroundColor: '#e8e8f1ff',
      borderRadius: '8px',
      height: 'auto',
      maxWidth: '600px',
      margin: 'auto'
     }}>
      <h1>Welcome to Cricket App</h1>
      <button onClick={toggleComponent}>
        {showList ? 'Show Indian Players' : 'Show List of Players'}
      </button>

      <hr />

      {showList ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;