import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/status')
      .then(r => r.json())
      .then(data => { setStatus(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{padding:'2rem', fontFamily:'sans-serif'}}>
      <h1>CI/CD Pipeline Dashboard</h1>
      {loading ? <p>Chargement...</p> : status ? (
        <div>
          <p>Statut : <strong style={{color:'green'}}>{status.status}</strong></p>
          <p>Version : {status.version}</p>
          <p>Uptime : {status.uptime}</p>
          <p>Heure : {status.timestamp}</p>
        </div>
      ) : <p style={{color:'red'}}>Serveur non joignable</p>}
    </div>
  );
}

export default App;
