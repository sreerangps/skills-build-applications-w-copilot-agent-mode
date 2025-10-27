import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Fetched leaderboard:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Leaderboard</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((l) => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.user}</td>
                <td>{l.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Leaderboard;
