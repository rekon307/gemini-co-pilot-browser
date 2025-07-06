import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  const handleNavigate = () => {
    if (url) {
      window.electronAPI.navigate(url);
    }
  };

  return (
    <div>
      <h1>Gemini Co-Pilot Browser</h1>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          style={{ width: '300px', padding: '5px' }}
        />
        <button onClick={handleNavigate} style={{ padding: '5px 10px', marginLeft: '5px' }}>Go</button>
      </div>
      {/* The actual browser content will be displayed by the main process */}
    </div>
  );
}

export default App;