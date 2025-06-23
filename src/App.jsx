import { useState } from 'react';

export default function App() {
  const [continent, setContinent] = useState(null);
  const continents = ['אסיה', 'אירופה', 'אפריקה', 'אמריקה הצפונית', 'אמריקה הדרומית', 'אוסטרליה'];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>🌍 Geo Quiz App</h1>
      <p>בחר יבשת כדי להתחיל:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {continents.map((name, idx) => (
          <button key={idx} onClick={() => setContinent(name)} style={{ padding: '0.5rem 1rem' }}>
            {name}
          </button>
        ))}
      </div>
      {continent && (
        <p style={{ marginTop: '2rem' }}>
          נבחרה יבשת: <strong>{continent}</strong>
        </p>
      )}
    </div>
  );
}
