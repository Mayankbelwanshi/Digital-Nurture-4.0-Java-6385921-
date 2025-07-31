import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit Sharma', score: 92 },
    { name: 'Sikhar Dhawan', score: 85 },
    { name: 'Virat Kohli', score: 78 },
    { name: 'KL Rahul', score: 68 },
    { name: 'Rishab Pant', score: 55 },
    { name: 'MS Dhoni', score: 65 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Md. Shami', score: 80 },
    { name: 'kuldeep Yadav', score: 71 },
    { name: 'R Ashwin', score: 69 },
    { name: 'Jasprit Bumrah', score: 76 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li>Mr. {player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li>Mr. {player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;