import React, { useState } from 'react';
import './App.css';

function App() {
  const [blueTokenCount, setBlueTokenCount] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(0);
  
  const [redTokenCount, setRedTokenCount] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState(0);

  const [tokens, setTokens] = useState({
    blue: [],
    red: [],
  });

  const generateTokens = () => {
    const blueTokens = Array.from({ length: blueTokenCount }, (_, i) => ({
      type: 'blue',
      text: `${blueTokenPrefix} ${i + 1}`
    }));
    
    const redTokens = Array.from({ length: redTokenCount }, (_, i) => ({
      type: 'red',
      text: `${redTokenPrefix} ${i + 1}`
    }));

    setTokens({
      blue: blueTokens,
      red: redTokens,
    });
  };

  const clearTokens = () => {
    setTokens({
      blue: [],
      red: [],
    });
    setBlueTokenCount(0);
    setBlueTokenPrefix('');
    setBlueTokensPerRow(0);
    setRedTokenCount(0);
    setRedTokenPrefix('');
    setRedTokensPerRow(0);
  };

  return (
    <div className="App">
      <h1>Token Generator</h1>
      <div className="form-container">
        <div className="form-group">
          <label>Number of Blue Tokens:</label>
          <input
            type="number"
            value={blueTokenCount}
            onChange={(e) => setBlueTokenCount(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Prefix for Blue Tokens:</label>
          <input
            type="text"
            value={blueTokenPrefix}
            onChange={(e) => setBlueTokenPrefix(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Blue Tokens Per Row:</label>
          <input
            type="number"
            value={blueTokensPerRow}
            onChange={(e) => setBlueTokensPerRow(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Number of Red Tokens:</label>
          <input
            type="number"
            value={redTokenCount}
            onChange={(e) => setRedTokenCount(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Prefix for Red Tokens:</label>
          <input
            type="text"
            value={redTokenPrefix}
            onChange={(e) => setRedTokenPrefix(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Red Tokens Per Row:</label>
          <input
            type="number"
            value={redTokensPerRow}
            onChange={(e) => setRedTokensPerRow(Number(e.target.value))}
          />
        </div>
        <button onClick={generateTokens}>Generate Tokens</button>
        <button onClick={clearTokens}>Clear Tokens</button>
      </div>

      <div className="token-display">
        <div className="token-row">
          {tokens.blue.map((token, index) => (
            <div
              key={index}
              className="token blue-token"
              style={{ width: `${50 / blueTokensPerRow}%` }}
            >
              {token.text}
            </div>
          ))}
        </div>
        <div className="token-row">
          {tokens.red.map((token, index) => (
            <div
              key={index}
              className="token red-token"
              style={{ width: `${50 / redTokensPerRow}%` }}
            >
              {token.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
