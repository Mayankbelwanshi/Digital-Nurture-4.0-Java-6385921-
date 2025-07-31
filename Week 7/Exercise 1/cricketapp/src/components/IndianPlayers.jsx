import React from 'react';

const IndianPlayers = () => {
  const players = ['Rohit', 'Virat', 'Dhoni', 'Bumrah', 'Hardik', 'Pant'];

  const oddTeamPlayers = players.map((player, index) => ({ player, index })).filter(({ index }) => index % 2 !== 0);

  const evenTeamPlayers = players.map((player, index) => ({ player, index })).filter(({ index }) => index % 2 === 0);

  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Rishab Pant'];
  const RanjiTrophyPlayers = ['Ravindra Jadeja', 'Chitteshwar Pujara', 'Ridhiman Saha'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddTeamPlayers.map(({ player, index }) => (
          <li key={index}>
            Position: {index}, Player: {player}
          </li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenTeamPlayers.map(({ player, index }) => (
          <li key={index}>
            Position: {index}, Player: {player}
          </li>
        ))}
      </ul>

      <h2>List of Indian Players Merged : </h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
