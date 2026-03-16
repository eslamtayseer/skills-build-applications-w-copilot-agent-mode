import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setLeaderboard(results);
        console.log('Fetched Leaderboard:', results);
      })
      .catch(err => console.error('Error fetching Leaderboard:', err));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-3 text-success">Leaderboard</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {leaderboard.length > 0 && Object.keys(leaderboard[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={idx}>
                  {Object.values(entry).map((val, i) => (
                    <td key={i}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
